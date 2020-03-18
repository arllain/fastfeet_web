import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { Container } from './styles';
import colors from '~/styles/colors';

export default function InputSearch({ placeholder, onChange, search }) {
  return (
    <Container>
      <Form>
        <MdSearch size={25} color={colors.gray_99} />
        <Input
          name="search"
          placeholder={placeholder}
          onChange={onChange}
          value={search}
        />
      </Form>
    </Container>
  );
}

InputSearch.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
