import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz, MdCreate, MdDeleteForever } from 'react-icons/md';

import colors from '~/styles/colors';

import { Container, ActionButton, ActionList, Action } from './styles';

export default function Actions({ onDelete, onEdit }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <ActionButton onClick={handleToggleVisible}>
        <MdMoreHoriz size={22} color={colors.gray_c6} />
      </ActionButton>

      <ActionList visible={visible}>
        <Action onClick={onEdit}>
          <p>
            <MdCreate color={colors.blue} size={15} /> Edit
          </p>
        </Action>
        <Action onClick={onDelete}>
          <p>
            <MdDeleteForever color={colors.red} size={15} /> Delete
          </p>
        </Action>
      </ActionList>
    </Container>
  );
}

Actions.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
