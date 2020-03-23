import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';
import CustomButton from '~/components/CustomButton';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Please, enter a valid eamil')
    .required('Enter your email'),
  password: Yup.string().required('Enter your password'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="FastFeet" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="example@email.com"
          label="YOUR E-MAIL"
        />
        <Input
          name="password"
          type="password"
          placeholder="************"
          label="YOUR PASSWORD"
        />
        <CustomButton
          type="submit"
          witdth="10px"
          height="40px"
          margin="10px 20px"
          fontSize="16px"
          fontWeigt="bold"
        >
          {loading ? 'Loading' : 'Sign in'}
        </CustomButton>
      </Form>
    </>
  );
}
