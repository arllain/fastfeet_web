import React from 'react';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import Routes from '~/routes/';
import history from './services/history';
import GlocalStyle from './styles/global';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlocalStyle />
      </Router>
    </Provider>
  );
}

export default App;
