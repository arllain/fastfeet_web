import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  background: ${colors.light};
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid;
    }
    a {
      font-weight: bold;
      color: ${colors.purple};
    }
  }
  aside {
    display: flex;
    color: ${colors.purple};
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #333;
    }

    button {
      border: none;
      background: ${colors.light};
      margin-top: 2px;
      font-size: 14px;
      color: #de3b3b;
      opacity: 1;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`;
