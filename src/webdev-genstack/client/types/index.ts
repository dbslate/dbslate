export * from '$utils/is';
export * from '$USERPROJECT/types';
export * from '../actions/app.actions.gen';

import {Store as ReduxStore, Dispatch as ReduxDispatch} from 'redux';

import * as t from '../types';

export interface ClientCtx {
  root: HTMLElement | null;
  store: Store;
  primus: Primus<t.Message>;
}

export type Store = ReduxStore<t.ClientState>;
export type Dispatch = ReduxDispatch<t.ClientState>;

export interface PrimusClient extends Primus<t.Message> {}
