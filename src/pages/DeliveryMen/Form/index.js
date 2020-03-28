import React, { useEffect, useRef } from 'react';
import { MdNavigateBefore, MdCheck } from 'react-icons/md';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Container, Content, UnForm } from './styles';
import CustomButton from '~/components/CustomButton';
import colors from '~/styles/colors';
import AvatarInput from './AvatarInput';
import api from '~/services/api';
import history from '~/services/history';
import FormHearder from '~/components/FormHearder';
import CustomInput from '~/components/CustomInput';

export default function DeliveryManForm({ match }) {
  const { id } = match.params;
  const formRef = useRef();

  useEffect(() => {
    async function loadDeliveryman() {
      if (id) {
        const response = await api.get(`/deliveryman/${id}`);
        formRef.current.setData(response.data);
        formRef.current.setFieldValue('avatar', response?.data?.avatar?.url);
      }
    }
    loadDeliveryman();
  }, [id]);

  function handleBackNavigate() {
    history.push('/deliverymen');
  }

  async function handleSubmit(data) {
    formRef.current.setErrors({});

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Enter your name'),
        email: Yup.string()
          .email('Please, enter a valid eamil')
          .required('Enter your email'),
        avatar_id: Yup.number(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const dataFile = new FormData();

      dataFile.append('file', data.avatar);

      const responseFile = data.avatar
        ? await api.post('files', dataFile)
        : null;

      if (!id) {
        await api.post('/deliveryman', {
          avatar_id: responseFile?.data?.id,
          name: data.name,
          email: data.email,
        });
        toast.success('Deliveryman registered successfully');
        history.push('/deliverymen/');
      } else {
        await api.put(`/deliveryman/${id}`, {
          avatar_id: responseFile?.data?.id,
          name: data.name,
          email: data.email,
        });
        toast.success('Deliveryman updating successfully');
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};

        error.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      } else {
        toast.error(`Error when ${id ? 'updating' : 'adding'} the deliveryman`);
      }
    }
  }

  return (
    <Container>
      <Content>
        <FormHearder title={id ? 'Update Deliveyman' : 'Add Deliveyman'}>
          <CustomButton
            type="button"
            width="112px"
            height="36px"
            onClick={handleBackNavigate}
            isBackButton
          >
            <MdNavigateBefore size={30} color={colors.light} />
            Back
          </CustomButton>
          <CustomButton
            type="submit"
            width="112px"
            height="36px"
            onClick={() => formRef.current.submitForm()}
          >
            <MdCheck size={30} color={colors.light} />
            Save
          </CustomButton>
        </FormHearder>

        <UnForm ref={formRef} onSubmit={handleSubmit}>
          <AvatarInput name="avatar" />
          <CustomInput name="name" placeholder="John Doe" label="Nome" />
          <CustomInput
            name="email"
            type="email"
            placeholder="example@email.com"
            label="Email"
          />
        </UnForm>
      </Content>
    </Container>
  );
}
