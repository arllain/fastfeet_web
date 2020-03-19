import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import en_US from 'date-fns/locale/en-US';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { Container, DeliveryTable, EmptyList, Search } from './styles';
import Action from './Actions';
import Status from './Status';
import api from '~/services/api';
import InputSearch from '~/components/InputSearch';
import AddButton from '~/components/AddButton';
import Pagination from '~/components/Pagination';
import history from '~/services/history';
import Spinner from '~/components/Spinner';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [page, setPage] = useState(1);
  const [searchProduct, setSearchProduct] = useState('');
  const [loading, setLoading] = useState(false);

  async function loadDeliveries() {
    setLoading(true);
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
    setLoading(false);
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

  function handleConfrm(id) {
    confirmAlert({
      message: 'Are you sure you want to delete this delivery ?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleDelete(id),
        },
        {
          label: 'No',
        },
      ],
    });
  }

  function handlePagination(props) {
    setPage(props === 'back' ? page - 1 : page + 1);
  }

  function handleNavigate() {
    history.push('/delivery/new');
  }

  return (
    <Container>
      <h2>Deliveries Management</h2>
      <Search>
        <InputSearch
          placeholder="Seach for deliveries"
          onChange={e => setSearchProduct(e.target.value)}
          search={searchProduct}
        />
        <AddButton label="Delivery" buttonClick={handleNavigate} />
      </Search>

      {loading ? (
        <Spinner />
      ) : (
        <DeliveryTable>
          {!deliveries.length ? (
            <EmptyList>
              <h1>No Orders Found</h1>
            </EmptyList>
          ) : (
            <>
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
                          onDelete={() => handleConfrm(delivery.id)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </>
          )}
        </DeliveryTable>
      )}
      <Pagination
        page={page}
        itemslength={deliveries.length}
        previousPage={() => handlePagination('back')}
        nextPage={() => handlePagination('next')}
      />
    </Container>
  );
}
