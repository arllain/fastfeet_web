import styled, { css } from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

const addStyles = css`
  background: ${colors.purple} 0 0 no-repeat padding-box;
  color: ${colors.light};
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.03, '#7d40e7')};
  }
`;

const defaultStyles = css`
  background-color: ${colors.gray};
  color: white;
`;

const getButtonStyles = props => {
  if (props.isAddButton) {
    return addStyles;
  }
  return defaultStyles;
};

export const Container = styled.button`
  display: flex;
  justify-content: center;
  width: 142px;
  height: 36px;
  opacity: 1;

  border: 0;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0;
  align-items: center;

  ${getButtonStyles}
`;
