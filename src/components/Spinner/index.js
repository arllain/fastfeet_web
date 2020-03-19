import React from 'react';
import Loader from 'react-spinners/FadeLoader';
import { Container } from './styles';
import colors from '~/styles/colors';

export default function Spinner() {
  return (
    <Container>
      <div className="sweet-loading">
        <Loader color={colors.purple} loading />
      </div>
    </Container>
  );
}
