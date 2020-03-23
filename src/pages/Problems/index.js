import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { Container, ProblemTable } from './styles';
import Action from './Actions';
import api from '~/services/api';
import Pagination from '~/components/Pagination';
import Spinner from '~/components/Spinner';
import 'react-confirm-alert/src/react-confirm-alert.css';
import EmptyList from '~/components/EmptyList';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadProblems() {
    try {
      setLoading(true);
      const response = await api.get('delivery/problems', {
        params: { page },
      });

      const data = response.data.map(problem => ({
        ...problem,
        idDeliveryProblemFormatted: `#${problem.delivery.id
          .toString()
          .padStart(2, '0')}`,
      }));

      setProblems(data);
    } catch (error) {
      toast.warn(`${error.message}: Please verify your internet connection.`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProblems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  async function handleCancel(id) {
    try {
      const response = await api.put(`/problem/${id}/cancel-delivery`);
      toast.success(response.data.message);
      loadProblems();
    } catch (err) {
      toast.error('There was a problem in canceling this delivery');
    }
  }

  function handleConfrm(id) {
    confirmAlert({
      message: 'Are you sure you want to cancel this delivery ?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleCancel(id),
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

  return (
    <Container>
      <h2>Deliveries Problems</h2>

      {loading ? (
        <Spinner />
      ) : (
        <>
          {!problems.length ? (
            <EmptyList customText="No Delivery Problems Found" />
          ) : (
            <ProblemTable>
              <thead>
                <tr>
                  <th>Delivery</th>
                  <th>Problem</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {problems.length > 0 &&
                  problems.map(problem => (
                    <tr key={problem.id}>
                      <td>{problem.idDeliveryProblemFormatted}</td>
                      <td>{problem.description}</td>
                      <td>
                        <Action
                          problem={problem}
                          onCancel={() => handleConfrm(problem.id)}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </ProblemTable>
          )}
        </>
      )}
      <Pagination
        page={page}
        itemslength={problems.length}
        previousPage={() => handlePagination('back')}
        nextPage={() => handlePagination('next')}
      />
    </Container>
  );
}
