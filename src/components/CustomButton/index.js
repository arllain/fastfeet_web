import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function CustomButton({ children, ...props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Container {...props}>{children}</Container>;
}

CustomButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
};
