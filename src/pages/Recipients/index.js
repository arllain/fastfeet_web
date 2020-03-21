import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { MdAdd } from 'react-icons/md';
import { Container, RecipientTable, Search } from './styles';
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

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  async function loadRecipients() {
    setLoading(true);
    const response = await api.get('recipients', {
      params: { page, q: search },
    });

    const data = response.data.map(recipient => ({
      ...recipient,
      idFormatted: `#${recipient.id.toString().padStart(2, '0')}`,
      address: `${recipient.street}, ${recipient.number}, ${recipient.complement} ,
      ${recipient.city} - ${recipient.state}`,
    }));

    setRecipients(data);
    setLoading(false);
  }

  useEffect(() => {
    loadRecipients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);

  async function handleDelete(id) {
    try {
      await api.delete(`/recipients/${id}`);
      toast.success('The recipient was succesful deleted');
      loadRecipients();
    } catch (err) {
      toast.error('There was a problem in deleting this recipient');
    }
  }

  function handleConfrm(id) {
    confirmAlert({
      message: 'Are you sure you want to delete this recipient ?',
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
    history.push('/recipient/add');
  }

  return (
    <Container>
      <h2>Recipients Management</h2>
      <Search>
        <InputSearch
          placeholder="Seach for recipients"
          onChange={e => setSearch(e.target.value)}
          search={search}
        />
        <CustomButton
          type="button"
          width="143px"
          height="36px"
          onClick={handleNavigate}
        >
          <MdAdd size={30} color={colors.light} />
          Recipient
        </CustomButton>
      </Search>

      {loading ? (
        <Spinner />
      ) : (
        <>
          {!recipients.length ? (
            <EmptyList customText="No Recipient Found" />
          ) : (
            <RecipientTable>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Adresss</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recipients.length > 0 &&
                  recipients.map(recipient => (
                    <tr key={recipient.id}>
                      <td>{recipient.idFormatted}</td>
                      <td>{recipient.name}</td>
                      <td>{recipient.address}</td>
                      <td>
                        <Action onDelete={() => handleConfrm(recipient.id)} />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </RecipientTable>
          )}
        </>
      )}
      <Pagination
        page={page}
        itemslength={recipients.length}
        previousPage={() => handlePagination('back')}
        nextPage={() => handlePagination('next')}
      />
    </Container>
  );
}
