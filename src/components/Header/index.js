import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/deliveries"> DELIVERIES </Link>
          <Link to="/deliverymen"> DELIVERYMEN </Link>
          <Link to="/recipients"> RECIPIENTS </Link>
          <Link to="/problems"> PROBLEMS </Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
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
