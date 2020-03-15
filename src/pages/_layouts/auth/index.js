import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, Card } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>
        <Card>{children}</Card>
      </Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
