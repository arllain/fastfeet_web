import React, { useState, useEffect } from 'react';
import {
  MdAdd,
  MdSearch,
  MdNavigateBefore,
  MdNavigateNext,
} from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import {
  Container,
  DeliveryTable,
  NotFoundMessege,
  Pagination,
} from './styles';
import Status from './Status';
import api from '~/services/api';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);
  const [searchProduct, setSearchProduct] = useState('');

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('delivery', {
        params: { page, q: searchProduct },
      });

      const data = response.data.map(delivery => ({
        ...delivery,
        idFormatted: `#${delivery.id.toString().padStart(2, '0')}`,
        status: <Status delivery={delivery} />,
      }));

      setDeliveries(data);
    }
    loadDeliveries();
  }, [page, searchProduct]);

  function handlePagination(props) {
    console.tron.log(props);
    console.tron.log(page);
    setPage(props === 'back' ? page - 1 : page + 1);
    console.tron.log(page);
  }

  return (
    <Container>
      <h2>Orders Management</h2>
      <div id="first-row">
        <Form>
          <MdSearch size={25} color="#999999" />
          <Input
            name="search"
            placeholder="Seach for deliveries"
            onChange={e => setSearchProduct(e.target.value)}
            value={searchProduct}
          />
        </Form>
        <button type="button">
          <MdAdd size={30} color="#fff" />
          New Order
        </button>
      </div>
      {deliveries.length > 0 ? (
        <DeliveryTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Recipient</th>
              <th>DeliveryMan</th>
              <th>City</th>
              <th>State</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.length > 0 &&
              deliveries.map(delivery => (
                <tr key={delivery.id}>
                  <td>{delivery.idFormatted}</td>
                  <td>{delivery.recipient.name}</td>
                  <td>
                    <ul>
                      <li>
                        <img
                          src={
                            delivery.deliveryman.avatar
                              ? delivery.deliveryman.avatar.url
                              : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                          }
                          alt="avatar"
                        />
                      </li>
                      <li> {delivery.deliveryman.name}</li>
                    </ul>
                  </td>
                  <td>{delivery.recipient.city}</td>
                  <td>{delivery.recipient.state}</td>
                  <td> {delivery.status} </td>
                  <td> Actions </td>
                </tr>
              ))}
          </tbody>
        </DeliveryTable>
      ) : (
        <NotFoundMessege>
          <h1>No Orders Found</h1>
        </NotFoundMessege>
      )}
      <Pagination>
        <button
          type="button"
          disabled={page < 2}
          onClick={() => handlePagination('back')}
        >
          <MdNavigateBefore size={25} />
        </button>
        <span>Page {page}</span>
        <button
          type="button"
          disabled={deliveries.length < 1}
          onClick={() => handlePagination('next')}
        >
          <MdNavigateNext size={25} />
        </button>
      </Pagination>
    </Container>
  );
}
