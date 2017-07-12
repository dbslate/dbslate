export * from '$utils/is';

import * as t from './app.types.gen';

import {Dispatch as ReduxDispatch, Store as ReduxStore} from 'redux';

export interface ClientCtx {
  root: HTMLElement | null;
  store: Store;
  primus: Primus<t.Message>;
}

export type Store = ReduxStore<t.ClientState>;
export type Dispatch = ReduxDispatch<t.ClientState>;

export interface PrimusClient extends Primus<t.Message> {}
