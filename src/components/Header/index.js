import React from 'react';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '~/assets/logo.svg';
import { Container, Content, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
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
              {/* <Link onClick={handleSignOut}>Log out</Link> */}
              <button type="button" onClick={handleSignOut}>
                Log out
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
