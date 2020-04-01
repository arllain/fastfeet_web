import React from 'react';

import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function FormHeader({ title, children }) {
  return (
    <Container>
      <Content>
        <h1>{title}</h1>
        <div>{children}</div>
      </Content>
    </Container>
  );
}

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
