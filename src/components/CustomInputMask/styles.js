import styled from 'styled-components';
import ReactInputMask from 'react-input-mask';
import colors from '~/styles/colors';

export const InputMask = styled(ReactInputMask)`
  padding: 12px 15px;
  font-size: 16px;
  color: ${colors.gray_44};
  border-radius: 4px;
  &::placeholder {
    color: ${colors.gray_99};
  }
  height: 45px;
  border: 1px solid ${colors.dddddd};
`;

export const Error = styled.span`
  color: ${colors.pink};
  align-self: flex-start;
  margin: 1px 0;
  font-weight: bold;
  font-size: 13px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  strong {
    ${colors.gray_44}
    font-weight: bold;
    text-align: left;
    margin-bottom: 9px;
  }
  & + label {
    margin-top: 18px;
  }
`;
