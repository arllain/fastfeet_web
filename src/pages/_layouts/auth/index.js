import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import SignIn from '~/pages/SignIn';

export default function AuthLayout({ children }) {
  return (
    <Container>
      <SignIn />
    </Container>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
