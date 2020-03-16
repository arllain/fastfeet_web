import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';
import {
  MdMoreHoriz,
  MdRemoveRedEye,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import colors from '~/styles/colors';

import { Container, ActionButton, ActionList, Action } from './styles';

export default function Actions({ delivery }) {
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
            <h3>Delivery Information</h3>
            <p>
              {delivery.recipient.street}, {delivery.recipient.number}{' '}
              {delivery.recipient.complement}
            </p>
            <p>
              {delivery.recipient.city} - {delivery.recipient.state},{' '}
              {delivery.recipient.zipcode}
            </p>
            <hr />
            <h3>Dates</h3>
            <p>
              <b>Withdrawn: </b>
              {delivery.initialDate}
            </p>
            <p>
              <b>Delivered: </b> {delivery.finalDate}
            </p>

            <p>
              {delivery.canceledDate && (
                <>
                  <hr />
                  Order has been canceled ({delivery.canceledDate})
                </>
              )}
            </p>

            {delivery.finalDate && delivery.file && (
              <>
                <hr />
                <h3>Recipient Signature</h3>
                <img src={delivery.file.url} alt="Signature" />
              </>
            )}
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

        <Action>
          <p>
            <MdCreate color={colors.blue} size={15} /> Edit
          </p>
        </Action>
        <Action>
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
  delivery: PropTypes.object.isRequired,
};
