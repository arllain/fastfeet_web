import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: ${colors.gray_44};
  }
  > div {
    display: flex;
    button {
      margin-left: 16px;
    }
  }
`;
