import React from 'react';
import { NavLink } from 'react-router-dom';
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
          <NavLink to="/deliveries"> DELIVERIES </NavLink>
          <NavLink to="/deliverymen"> DELIVERYMEN </NavLink>
          <NavLink to="/recipients"> RECIPIENTS </NavLink>
          <NavLink to="/problems"> PROBLEMS </NavLink>
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
