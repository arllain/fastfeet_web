import styled from 'styled-components';

import colors from '~/styles/colors';

export const Label = styled.label`
  color: ${colors.gray_44};
  font-weight: bold;
  text-align: left;
  display: block;
  margin-bottom: 9px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Error = styled.span`
  color: ${colors.red};
  margin-top: 8px;
`;
