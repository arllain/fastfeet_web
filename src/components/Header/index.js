import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '~/assets/logo.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          {/*  <Link to="/dashboard">ENCOMENDAS</Link>
          <Link to="/dashboard">ENTREGADORES</Link>
          <Link to="/dashboard">DESTINATÁRIOS</Link>
          <Link to="/dashboard">PROBLEMAS</Link> */}
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/">Log out</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
