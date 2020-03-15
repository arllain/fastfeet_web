import React from 'react';
import PropTypes from 'prop-types';
import { MdFiberManualRecord } from 'react-icons/md';

import { Container, Content } from './styles';

export default function Status({ delivery }) {
  const { start_date, canceled_at, end_date } = delivery;
  let status_text;
  let status_color;
  let status_background;

  if (canceled_at) {
    status_text = 'CANCELED';
    status_color = '#DE3B3B';
    status_background = '#FAB0B0';
  } else if (end_date) {
    status_text = 'DELIVERED';
    status_color = '#2CA42B';
    status_background = '#DFF0DF';
  } else if (start_date) {
    status_text = 'PENDING';
    status_color = '#4D85EE';
    status_background = '#BAD2FF';
  } else {
    status_text = 'TO DELIVER';
    status_color = '#C1BC35';
    status_background = '#F0F0DF';
  }

  return (
    <Container>
      <Content color={status_color} background={status_background}>
        <MdFiberManualRecord size={15} color={status_color} />
        <strong color={status_color}>{status_text}</strong>
      </Content>
    </Container>
  );
}

Status.propTypes = {
  delivery: PropTypes.string.isRequired,
};
