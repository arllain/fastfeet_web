import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, ${colors.purple}, ${colors.light_purple});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 315px;
`;

export const Card = styled.div`
  background: ${colors.light};
  width: 360px;
  height: 420px;
  border-radius: 4px;

  img {
    margin: 50px 50px;
    width: 250px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px 10px;

    label {
      text-align: left;
      font-weight: bold;
      margin: 0 20px;
    }

    input {
      background: ${colors.light};
      border: 1px solid ${colors.dddddd};
      border-radius: 4px;
      height: 40px;
      padding: 0 7px;
      color: ${colors.dark};
      margin: 10px 20px;
      width: 320px;
      &::placeholder {
        color: rgba(153, 153, 153, 0.7);
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 20px 5px 20px;
      font-weight: bold;
      font-size: 13px;
    }
  }
`;
