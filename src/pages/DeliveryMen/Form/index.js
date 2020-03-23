import React, { useEffect, useState } from 'react';
import { MdNavigateBefore, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Container, Content, TitleArea, ButtonArea, Card } from './styles';
import CustomButton from '~/components/CustomButton';
import colors from '~/styles/colors';
import AvatarInput from './AvatarInput';
import api from '~/services/api';
import history from '~/services/history';

const schema = Yup.object().shape({
  name: Yup.string().required('Enter your name'),
  email: Yup.string()
    .email('Please, enter a valid eamil')
    .required('Enter your email'),
  avatar_id: Yup.number(),
});

export default function DeliveryManForm({ match }) {
  const { id } = match.params;
  const [deliveryman, setDeliveryman] = useState('');

  useEffect(() => {
    async function loadDeliveryman() {
      if (id) {
        const response = await api.get(`/deliveryman/${id}`);
        const { data } = response;
        setDeliveryman(data);
      }
    }

    loadDeliveryman();
  }, [id]);

  function handleBackNavigate() {
    history.push('/deliverymen');
  }

  async function handleSubmit(data) {
    if (!id) {
      try {
        const response = await api.post('/deliveryman', data);
        toast.success('Deliveryman registered successfully');
        history.push(`/deliveryman/edit/${response.data.id}`);
      } catch (error) {
        toast.error('Error when registering the deliveryman');
      }
    } else {
      try {
        await api.put(`/deliveryman/${id}`, data);
        toast.success('Deliveryman updating successfully');
      } catch (error) {
        toast.error('Error when updating the deliveryman');
      }
    }
  }

  return (
    <Container>
      <Form initialData={deliveryman} schema={schema} onSubmit={handleSubmit}>
        <Content>
          <TitleArea>
            <h2>{deliveryman ? 'Update ' : 'Add '}Deliveryman</h2>
          </TitleArea>
          <ButtonArea>
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

            <CustomButton type="submit" width="112px" height="36px">
              <MdCheck size={30} color={colors.light} />
              Save
            </CustomButton>
          </ButtonArea>
        </Content>
        <Card>
          <AvatarInput
            name="avatar_id"
            avatar={deliveryman && deliveryman.avatar}
          />
          <Input name="name" placeholder="John Doe" label="Nome" />
          <Input
            name="email"
            type="email"
            placeholder="example@email.com"
            label="Email"
          />
        </Card>
      </Form>
    </Container>
  );
}

// DeliveryManForm.propTypes = {
//   id: PropTypes.string.isRequired,
// };

DeliveryManForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
