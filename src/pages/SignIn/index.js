import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="FastFeet" />
      <Form>
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
        <button type="submit">Sign in</button>
      </Form>
    </>
  );
}
