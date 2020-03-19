import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  padding: 5px 120px;
  display: flex;
  flex-direction: column;
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Content = styled.table`
  width: 80%;
  align-self: center;
  th {
    width: 10%;
    color: ${colors.gray_44};
    text-align: left;
    padding: 8px;
    font-size: 16px;
    &:first-child,
    &:last-child {
      width: 3%;
    }
    &:last-child {
      text-align: center;
    }
  }
  td {
    padding: 8px;
    border-bottom: 1px;
    color: ${colors.gray};
    font-size: 16px;
    &:last-child {
      text-align: center;
    }
    > p {
      width: 50%;
    }
    ul {
      display: flex;
      list-style: none;
      li {
        display: flex;
        align-items: center;
        img {
          align-items: center;
          border-radius: 50%;
          width: 21px;
          height: 21px;
          margin-right: 13px;
        }
      }
    }
  }
`;

export const DeliveryTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 15px;

  thead th {
    color: ${colors.gray_44};
    text-align: left;
    padding: 10px;
    background: ${colors.light_gray};
    &:first-child,
    &:last-child {
      width: 3%;
    }
    &:last-child {
      text-align: center;
    }
  }

  tbody tr {
    background: ${colors.light};
    border-collapse: separate;

    td {
      padding: 10px;
      ul {
        display: flex;
        li {
          img {
            align-items: center;
            border-radius: 50%;
            width: 21px;
            height: 21px;
            margin-right: 13px;
          }
        }
      }
      &:first-child {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      &:last-child {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }
`;

export const Empty = styled.div`
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
