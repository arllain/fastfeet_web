import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
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
              <strong>Admin</strong>
              <Link to="/">Log out</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Admin"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
