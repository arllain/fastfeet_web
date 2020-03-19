import React from 'react';
import PropTypes from 'prop-types';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { Container } from './styles';

export default function Pagination({
  page,
  itemslength,
  previousPage,
  nextPage,
}) {
  return (
    <Container>
      <button type="button" disabled={page < 2} onClick={previousPage}>
        <MdNavigateBefore size={25} />
      </button>
      <span>Page {page}</span>
      <button type="button" disabled={itemslength < 1} onClick={nextPage}>
        <MdNavigateNext size={25} />
      </button>
    </Container>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  itemslength: PropTypes.number.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};
