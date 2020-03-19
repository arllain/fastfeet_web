import React, { useState, useEffect } from 'react';
import {
  MdAdd,
  MdSearch,
  MdNavigateBefore,
  MdNavigateNext,
} from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import { Container, ContainerForm } from './styles';
import api from '~/services/api';
import colors from '~/styles/colors';
import InputSearch from '~/components/InputSearch';

export default function DeliveryMen() {
  const [deliverers, setDeliverers] = useState([]);
  const [page, setPage] = useState(1);
  const [searchDeliveryMan, setSearchDeliveryMan] = useState('');

  return (
    <Container>
      <h2>DeliveryMen Management</h2>
      <div id="first-row">
        <InputSearch
          placeholder="Seach for deliveryman"
          onChange={e => setSearchDeliveryMan(e.target.value)}
          search={searchDeliveryMan}
        />
      </div>
    </Container>
  );
}
