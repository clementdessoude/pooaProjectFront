import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { ConnectedRouter } from 'connected-react-router';
import { history } from './store/router';

import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'

import { persistor, store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
          <App />
      </ConnectedRouter>
    </PersistGate >
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
