import styled from 'styled-components';
import colors from '~/styles/colors';

export const Input = styled.input`
  padding: 12px 15px;
  font-size: 16px;
  color: ${colors.gray_44};
  border-radius: 4px;
  &::placeholder {
    color: ${colors.gray_99};
  }
  height: ${props => props.height};
  width: ${props => props.width};
  border: 1px solid ${colors.gray_dd};
`;

export const Error = styled.span`
  color: ${colors.red};
  margin-top: 8px;
  & + label {
    margin-top: 8px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  strong {
    color: ${colors.gray_44};
    font-weight: bold;
    text-align: left;
    margin-bottom: 9px;
  }
  & + label {
    margin-top: 18px;
  }
`;
