import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { MdAdd } from 'react-icons/md';
import { Container, DeliveryMenTable, Search } from './styles';
import Action from './Actions';
import api from '~/services/api';
import InputSearch from '~/components/InputSearch';
import CustomButton from '~/components/CustomButton';
import Pagination from '~/components/Pagination';
import history from '~/services/history';
import Spinner from '~/components/Spinner';
import 'react-confirm-alert/src/react-confirm-alert.css';
import EmptyList from '~/components/EmptyList';
import colors from '~/styles/colors';

export default function DeliveryMen() {
  const [deliveriesMen, setDeliveriesMen] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  async function loadDeliveriesMen() {
    try {
      setLoading(true);
      const response = await api.get('deliveryman', {
        params: { page, q: search },
      });

      const data = response.data.map(deliveryman => ({
        ...deliveryman,
        idFormatted: `#${deliveryman.id.toString().padStart(2, '0')}`,
      }));

      setDeliveriesMen(data);
    } catch (error) {
      toast.warn(`${error.message}: Please verify your internet connection.`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDeliveriesMen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  async function handleDelete(id) {
    try {
      await api.delete(`/deliveryman/${id}`);
      toast.success('The deliveryman was succesful deleted');
      loadDeliveriesMen();
    } catch (err) {
      toast.error('There was a problem in deleting this deliveryman');
    }
  }

  function handleConfrm(id) {
    confirmAlert({
      message: 'Are you sure you want to delete this deliveryman ?',
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

  function handleEdit(id) {
    history.push(`/deliveryman/edit/${id}`);
  }

  function handlePagination(props) {
    setPage(props === 'back' ? page - 1 : page + 1);
  }

  function handleAdd() {
    history.push('/deliveryman/add');
  }

  return (
    <Container>
      <h2>DeliveryMen Management</h2>
      <Search>
        <InputSearch
          placeholder="Seach for deliveryman"
          onChange={e => setSearch(e.target.value)}
          search={search}
        />
        <CustomButton
          type="button"
          width="143px"
          height="36px"
          onClick={handleAdd}
        >
          <MdAdd size={30} color={colors.light} />
          DeliveryMan
        </CustomButton>
      </Search>

      {loading ? (
        <Spinner />
      ) : (
        <>
          {!deliveriesMen.length ? (
            <EmptyList customText="No Deliverymen Found" />
          ) : (
            <DeliveryMenTable>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {deliveriesMen.length > 0 &&
                  deliveriesMen.map(deliveryman => (
                    <tr key={deliveryman.id}>
                      <td>{deliveryman.idFormatted}</td>
                      <td>
                        <ul>
                          <li>
                            <img
                              src={
                                deliveryman.avatar
                                  ? deliveryman.avatar.url
                                  : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                              }
                              alt="avatar"
                            />
                          </li>
                        </ul>
                      </td>
                      <td>{deliveryman.name}</td>
                      <td>{deliveryman.email}</td>
                      <td>
                        <Action
                          onDelete={() => handleConfrm(deliveryman.id)}
                          onEdit={() => handleEdit(deliveryman.id)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </DeliveryMenTable>
          )}
        </>
      )}
      <Pagination
        page={page}
        itemslength={deliveriesMen.length}
        previousPage={() => handlePagination('back')}
        nextPage={() => handlePagination('next')}
      />
    </Container>
  );
}
