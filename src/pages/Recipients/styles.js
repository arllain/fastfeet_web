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

export const RecipientTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;

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
      padding: 7px;
      ul {
        display: flex;
        li {
          img {
            align-items: center;
            border-radius: 50%;
            width: 21px;
            height: 21px;
            margin-left: 13px;
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
