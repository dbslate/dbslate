export * from './tsActionWriter';
export * from './tsTypeWriter';
export * from './tsMockWriter';
export * from './tsDefWriter';
export * from './tsActionTestWriter';
export * from './tsReducerTestWriter';

import {tsActionWriter} from './tsActionWriter';
import {tsActionTestWriter} from './tsActionTestWriter';
import {tsDefWriter} from './tsDefWriter';
import {tsMockWriter} from './tsMockWriter';
import {tsReducerTestWriter} from './tsReducerTestWriter';
import {tsTypeWriter} from './tsTypeWriter';
import {Writer} from '$gen/types';

export const ordered: Writer[] = [
  tsDefWriter,
  tsTypeWriter,
  tsMockWriter,
  tsActionWriter,
  tsActionTestWriter,
  tsReducerTestWriter,
];

export default ordered;
