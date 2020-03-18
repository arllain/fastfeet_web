import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  form {
    display: flex;
    align-items: center;
    border: 1px solid ${colors.dddddd};
    border: 1px solid #dddddd;
    border-radius: 4px;
    background: ${colors.light} 0 0 no-repeat padding-box;

    input {
      display: flex;
      width: 237px;
      height: 36px;
      border: none;
      border-radius: 4px;
      opacity: 1;
    }
  }
`;
