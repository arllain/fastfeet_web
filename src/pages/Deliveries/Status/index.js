import React from 'react';
import PropTypes from 'prop-types';
import { MdFiberManualRecord } from 'react-icons/md';
import colors from '~/styles/colors';

import { Container, Content } from './styles';

export default function Status({ delivery }) {
  const { start_date, canceled_at, end_date } = delivery;
  let status = {};

  if (canceled_at) {
    status = {
      text: 'CANCELED',
      color: `${colors.red}`,
      background: `${colors.light_pink}`,
    };
  } else if (end_date) {
    status = {
      text: 'DELIVERED',
      color: `${colors.green}`,
      background: `${colors.light_green}`,
    };
  } else if (start_date) {
    status = {
      text: 'PENDING',
      color: `${colors.blue}`,
      background: `${colors.light_blue}`,
    };
  } else {
    status = {
      text: 'TO DELIVER',
      color: `${colors.yellow}`,
      background: `${colors.light_yellow}`,
    };
  }

  return (
    <Container>
      <Content color={status.color} background={status.background}>
        <MdFiberManualRecord size={15} color={status.color} />
        <strong color={status.color}>{status.text}</strong>
      </Content>
    </Container>
  );
}

Status.propTypes = {
  delivery: PropTypes.string.isRequired,
};
