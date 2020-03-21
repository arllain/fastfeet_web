import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';
import { MdMoreHoriz, MdRemoveRedEye, MdDeleteForever } from 'react-icons/md';

import colors from '~/styles/colors';

import { Container, ActionButton, ActionList, Action } from './styles';

export default function Actions({ problem, onCancel }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  const ModalDelivery = () => (
    <Popup
      trigger={
        <Action>
          <p>
            <MdRemoveRedEye color={colors.purple} size={15} /> View
          </p>
        </Action>
      }
      modal
    >
      {() => (
        <div className="modal">
          <div className="content">
            <h3>View Problem</h3>
            <p>{problem.description}</p>
          </div>
        </div>
      )}
    </Popup>
  );

  return (
    <Container>
      <ActionButton onClick={handleToggleVisible}>
        <MdMoreHoriz size={22} color={colors.gray_c6} />
      </ActionButton>

      <ActionList visible={visible}>
        <ModalDelivery />

        <Action onClick={onCancel}>
          <p>
            <MdDeleteForever color={colors.red} size={15} /> Cancel
          </p>
        </Action>
      </ActionList>
    </Container>
  );
}

Actions.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  problem: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
};
