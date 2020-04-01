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
  height: 401px;
  background: ${colors.light} 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  padding: 32px;
  overflow: hidden;
  margin: 0 auto;

  span {
    color: ${colors.pink};
    align-self: flex-start;
    margin: 1px 0;
    font-weight: bold;
    font-size: 13px;
  }
`;
