import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Container = styled.div`
  padding: 5px 120px;
  display: flex;
  flex-direction: column;

  div#first-row {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

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
  }
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

export const Pagination = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  button {
    align-items: center;
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
