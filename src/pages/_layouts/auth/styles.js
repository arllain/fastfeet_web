import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-90deg, ${colors.purple}, ${colors.light_purple});
  width: 100vw;
  height: 100vh;
`;
