import React, { useEffect, useRef } from 'react';
import { MdNavigateBefore, MdCheck } from 'react-icons/md';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Container, Content, UnForm } from './styles';
import CustomButton from '~/components/CustomButton';
import CustomInput from '~/components/CustomInput';
import colors from '~/styles/colors';
import api from '~/services/api';
import history from '~/services/history';
import FormHearder from '~/components/FormHearder';

export default function RecipientForm({ match }) {
  const { id } = match.params;
  const formRef = useRef();

  useEffect(() => {
    async function loadRecipient() {
      if (id) {
        const response = await api.get(`/recipients/${id}`);
        formRef.current.setData(response.data);
      }
    }
    loadRecipient();
  }, [id]);

  function handleBackNavigate() {
    history.push('/recipients');
  }

  async function handleSubmit(data) {
    formRef.current.setErrors({});

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Enter a recipient name'),
        street: Yup.string().required('Enter a street'),
        number: Yup.number().required('Enter a  number'),
        complement: Yup.string().required('Enter the address compliment'),
        state: Yup.string().required('Enter a state'),
        city: Yup.string().required('Enter a city'),
        zipcode: Yup.string().required('Enter a zipcode'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      if (!id) {
        await api.post('/recipients', {
          name: data.name,
          street: data.street,
          number: data.number.toString(),
          complement: data.complement,
          state: data.state,
          city: data.city,
          zipcode: data.zipcode,
        });
        toast.success('Recipient registered successfully');
        history.push('/recipients');
      } else {
        await api.put(`/recipients/${id}`, {
          name: data.name,
          street: data.street,
          number: data.number.toString(),
          complement: data.complement,
          state: data.state,
          city: data.city,
          zipcode: data.zipcode,
        });
        toast.success('Recipient updating successfully');
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <Content>
        <FormHearder title={id ? 'Update Recipient' : 'Add Recipient'}>
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
          <CustomInput
            id="name"
            name="name"
            placeholder="John Doe"
            label="Name"
          />
          <div>
            <CustomInput
              id="street"
              name="street"
              placeholder="First Street"
              label="Street"
            />

            <CustomInput
              type="number"
              name="number"
              placeholder="1250"
              label="Number"
            />
            <CustomInput
              id="compl"
              name="complement"
              placeholder=""
              label="Complement"
            />
          </div>
          <div>
            <CustomInput name="city" placeholder="Recife" label="City" />
            <CustomInput name="state" placeholder="PE" label="State" />
            <CustomInput name="zipcode" placeholder="55555" label="Zip Code" />
          </div>
        </UnForm>
      </Content>
    </Container>
  );
}
