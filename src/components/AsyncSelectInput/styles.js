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
  color: ${colors.pink};
  align-self: flex-start;
  margin: 1px 0;
  font-weight: bold;
  font-size: 13px;
`;
