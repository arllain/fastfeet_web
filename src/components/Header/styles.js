import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  background: ${colors.light};
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 1px 1px ${colors.dddddd};
  margin-bottom: 34px;
  position: relative;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid ${colors.dddddd};
      height: 30px;
    }

    a {
      margin-right: 15px;
      font-weight: bold;
      color: ${colors.gray_99};
      transform: color 0.3s;

      &:hover {
        color: ${colors.gray_44};
      }

      &.active {
        color: ${colors.gray_44};
      }
    }
  }

  aside {
    display: flex;
    color: ${colors.purple};
    align-items: center;
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
      display: block;
      border: none;
      background: ${colors.light};
      margin-top: 2px;
      font-size: 14px;
      color: ${colors.red};
      opacity: 1;
    }
  }

  img {
    height: 32px;
    border-radius: 50%;
  }
`;
