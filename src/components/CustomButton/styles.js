import styled, { css } from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

const defaultStyles = css`
  background: ${colors.purple} 0 0 no-repeat padding-box;
  color: ${colors.light};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};

  transition: background 0.2s;
  &:hover {
    background: ${darken(0.03, '#7d40e7')};
  }
`;

const backButtonStyles = css`
  width: ${props => props.width};
  height: ${props => props.heigh};
  background-color: ${colors.gray_cc};
  color: ${colors.light};
`;

const getButtonStyles = props => {
  if (props.isBackButton) {
    return backButtonStyles;
  }
  return defaultStyles;
};

export const Container = styled.button`
  display: flex;
  justify-content: center;
  opacity: 1;
  border: 0;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0;
  align-items: center;
  font-weight: ${props => props.fontWeigt};
  font-size: ${props => props.fontSize};

  ${getButtonStyles}
`;
