import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function EmptyList({ customText }) {
  return (
    <Container>
      <h1>{customText}</h1>
    </Container>
  );
}

EmptyList.propTypes = {
  customText: PropTypes.string.isRequired,
};
