import React from 'react';
import { Router } from 'react-router-dom';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
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
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
