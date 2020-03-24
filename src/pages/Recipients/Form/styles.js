import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  padding: 5px 120px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TitleArea = styled.div`
  width: 62%;
  max-width: 980px;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 38%;
  max-width: 240px;
`;

export const Card = styled.div`
  background: ${colors.light};
  margin-top: 20px;
  height: 400px;
  border-radius: 4px;
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
    height: 45px;
    padding: 0 7px;
    color: ${colors.dark};
    margin: 10px 20px;
    &::placeholder {
      color: rgba(153, 153, 153, 0.7);
    }
  }

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 20px 8px 20px;
    font-weight: bold;
    font-size: 13px;
  }
`;
