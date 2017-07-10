import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';

import 'normalize.css';
import './index.css';

import {ClientCtx} from '../types';
import {logMiddleware} from '../middlewares/log';
import {reducer} from '../reducers';
import App from '../views/App';
import registerServiceWorker from './registerServiceWorker';
import {createPrimus, initPrimus} from './primus';

export const initBasic = async (): Promise<ClientCtx> => {
  const ctx: ClientCtx = {
    store: createStore(reducer, undefined, applyMiddleware(logMiddleware)),
    root: document.getElementById('root'),
    primus: createPrimus(),
  };
  initPrimus(ctx);

  ReactDOM.render(<Provider store={ctx.store}><App /></Provider>, ctx.root);

  registerServiceWorker();

  return ctx;
};
