import styled from 'styled-components';

export const Container = styled.div`
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
