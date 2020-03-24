import React, { useEffect, useState } from 'react';
import { MdNavigateBefore, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Container, Content, TitleArea, ButtonArea, Card } from './styles';
import CustomButton from '~/components/CustomButton';
import colors from '~/styles/colors';
import api from '~/services/api';
import history from '~/services/history';

const schema = Yup.object().shape({
  name: Yup.string().required('Enter a recipient name'),
  street: Yup.string().required('Enter a street'),
  number: Yup.number().required('Enter a  number'),
  complement: Yup.string().required('Enter the address compliment'),
  state: Yup.string().required('Enter a state'),
  city: Yup.string().required('Enter a city'),
  zipcode: Yup.string().required('Enter a zipcode'),
});

export default function RecipientForm({ match }) {
  const { id } = match.params;
  const [recipient, setRecipient] = useState('');

  useEffect(() => {
    async function loadRecipient() {
      if (id) {
        const response = await api.get(`/recipients/${id}`);
        const { data } = response;
        setRecipient(data);
      }
    }

    loadRecipient();
  }, [id]);

  function handleBackNavigate() {
    history.push('/recipients');
  }

  async function handleSubmit(data) {
    if (!id) {
      try {
        const response = await api.post('/recipients', {
          name: data.name,
          street: data.street,
          number: data.number.toString(),
          complement: data.complement,
          state: data.state,
          city: data.city,
          zipcode: data.zipcode,
        });
        toast.success('Recipient registered successfully');
        history.push(`/recipient/edit/${response.data.id}`);
      } catch (error) {
        toast.error('Error when registering recipient');
      }
    } else {
      try {
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
      } catch (error) {
        toast.error('Error when updating the recipient');
      }
    }
  }

  return (
    <Container>
      <Form initialData={recipient} schema={schema} onSubmit={handleSubmit}>
        <Content>
          <TitleArea>
            <h2>{recipient ? 'Update ' : 'Add '} Recipient</h2>
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
          <Input id="name" name="name" placeholder="John Doe" label="Name" />
          <Input
            id="street"
            name="street"
            placeholder="First Street"
            label="Street"
          />
          <Input
            type="number"
            name="number"
            placeholder="1250"
            label="Number"
          />
          <Input
            id="compl"
            name="complement"
            placeholder=""
            label="Complement"
          />
          <Input name="city" placeholder="Recife" label="City" />
          <Input name="state" placeholder="PE" label="State" />
          <Input name="zipcode" placeholder="55555" label="Zip Code" />
        </Card>
      </Form>
    </Container>
  );
}

RecipientForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
