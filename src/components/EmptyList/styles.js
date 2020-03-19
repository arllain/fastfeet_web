import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  width: 100%;
  padding: 40px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  h1 {
    color: ${colors.gray_99};
  }
`;
