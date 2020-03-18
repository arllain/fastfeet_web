import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import en_US from 'date-fns/locale/en-US';
import { toast } from 'react-toastify';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { Container, DeliveryTable, Empty, Pagination, Search } from './styles';
import Action from './Actions';
import Status from './Status';
import api from '~/services/api';
import InputSearch from '~/components/InputSearch';
import AddButton from '~/components/AddButton';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);
  const [searchProduct, setSearchProduct] = useState('');

  async function loadDeliveries() {
    const response = await api.get('delivery', {
      params: { page, q: searchProduct },
    });

    const data = response.data.map(delivery => ({
      ...delivery,
      idFormatted: `#${delivery.id.toString().padStart(2, '0')}`,
      initialDate:
        delivery.start_date &&
        format(parseISO(delivery.start_date), 'MM/dd/yyyy', {
          locale: en_US,
        }),
      canceledDate:
        delivery.canceled_at &&
        format(parseISO(delivery.canceled_at), 'MM/dd/yyyy', {
          locale: en_US,
        }),
      finalDate:
        delivery.end_date &&
        format(parseISO(delivery.end_date), 'MM/dd/yyyy', {
          locale: en_US,
        }),
    }));

    setDeliveries(data);
  }

  useEffect(() => {
    loadDeliveries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchProduct]);

  async function handleDelete(id) {
    try {
      await api.delete(`/delivery/${id}`);
      toast.success('The delivery was succesful deleted');
      loadDeliveries();
    } catch (err) {
      toast.error('There was a problem in deleting this delivery');
    }
  }

  function handlePagination(props) {
    setPage(props === 'back' ? page - 1 : page + 1);
  }

  return (
    <Container>
      <h2>Orders Management</h2>
      <Search>
        <InputSearch
          placeholder="Seach for deliveries"
          onChange={e => setSearchProduct(e.target.value)}
          search={searchProduct}
        />
        <AddButton label="New Order" />
      </Search>
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
                  <td>
                    <Status delivery={delivery} />
                  </td>
                  <td>
                    <Action
                      delivery={delivery}
                      onDelete={() => handleDelete(delivery.id)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </DeliveryTable>
      ) : (
        <Empty>
          <h1>No Orders Found</h1>
        </Empty>
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
