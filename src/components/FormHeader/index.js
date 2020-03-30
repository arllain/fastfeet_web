import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function FormHeader({ title, children }) {
  return (
    <Container>
      <h1>{title}</h1>
      <div>{children}</div>
    </Container>
  );
}

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
