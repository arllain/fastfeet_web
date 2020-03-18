import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  button {
    display: flex;
    justify-content: center;
    width: 142px;
    height: 36px;
    background: ${colors.purple} 0 0 no-repeat padding-box;
    opacity: 1;
    color: ${colors.light};
    border: 0;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 0;
    align-items: center;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, '#7d40e7')};
    }
  }
`;
