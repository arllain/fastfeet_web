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

export const Logo = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  padding: 32px 20px;
  img {
    width: 250px;
  }
`;

export const UnForm = styled(Form)`
  width: 360px;
  height: 425px;
  background: ${colors.light} 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
  opacity: 1;
  padding: 32px;
  overflow: hidden;
  margin: 0 auto;

  button {
    margin-top: 20px;
  }

  span {
    color: ${colors.pink};
    align-self: flex-start;
    margin: 1px 0;
    font-weight: bold;
    font-size: 13px;
  }
`;
