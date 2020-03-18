import React from 'react';
import { MdAdd } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Container } from './styles';
import colors from '~/styles/colors';

export default function AddButton({ label, buttonClick }) {
  return (
    <Container>
      <button type="button" onClick={buttonClick}>
        <MdAdd size={30} color={colors.light} />
        {label}
      </button>
    </Container>
  );
}

AddButton.propTypes = {
  label: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
};
