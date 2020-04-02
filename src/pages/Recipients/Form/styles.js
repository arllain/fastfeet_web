import styled from 'styled-components';
import { Form } from '@unform/web';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const UnForm = styled(Form)`
  width: 90%;
  max-width: 900px;
  height: 330px;
  background: ${colors.light} 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  padding: 32px;
  overflow: hidden;
  margin: 0 auto;

  div:nth-last-child(2) {
    display: grid;
    grid-template-columns: 3fr 0.8fr 0.8fr;
    grid-column-gap: 10px;
    label {
      margin: auto 0;
      margin-top: 18px;
    }

    input {
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }

    input #state {
      text-transform: uppercase;
    }

    margin-bottom: 10px;
  }
  div:nth-last-child(1) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    label {
      margin: auto 0;
    }
  }
`;
