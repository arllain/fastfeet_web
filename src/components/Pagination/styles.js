import styled from 'styled-components';

export const Container = styled.div`
  padding-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 14px;
    padding: 0 10px 0 10px;
  }

  button {
    align-items: center;
    transition: opacity 0.25s ease-out;
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 5px;
    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
  }
`;
