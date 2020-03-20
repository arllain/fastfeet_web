import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function CustomButton({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

CustomButton.propTypes = {
  children: PropTypes.element.isRequired,
};
