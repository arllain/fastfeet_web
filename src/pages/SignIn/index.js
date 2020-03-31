import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import logo from '~/assets/logo.png';
import { signInRequest } from '~/store/modules/auth/actions';
import CustomButton from '~/components/CustomButton';
import { Container, Content, UnForm, Logo } from './styles';
import CustomInput from '~/components/CustomInput';
export default function SignIn() {
  const formRef = useRef();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit(data) {
    formRef.current.setErrors({});

    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Please, enter a valid email')
          .required('Enter your email'),
        password: Yup.string().required('Enter your password'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(signInRequest(data.email, data.password));
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMessages = {};

        error.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Container>
      <Content>
        <UnForm ref={formRef} onSubmit={handleSubmit}>
          <Logo>
            <img src={logo} alt="FastFeet" />
          </Logo>
          <CustomInput
            name="email"
            type="emaail"
            placeholder="example@email.com"
            label="YOUR E-MAIL"
          />
          <CustomInput
            name="password"
            type="password"
            placeholder="************"
            label="YOUR PASSWORD"
            width="300px"
            height="45px"
          />

          <CustomButton
            type="submit"
            width="300px"
            height="45px"
            onClick={() => formRef.current.submitForm()}
          >
            <></>
            {loading ? 'Loading' : 'Sign in'}
          </CustomButton>
        </UnForm>
      </Content>
    </Container>
  );
}
