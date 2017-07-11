import {Writer} from '$gen/types';
import {fileWrapperWriter} from '$gen/writers';
import {tsActionTestWriter} from './tsActionTestWriter';
import {tsActionWriter} from './tsActionWriter';
import {tsDefWriter} from './tsDefWriter';
import {tsMockWriter} from './tsMockWriter';
import {tsReducerTestWriter} from './tsReducerTestWriter';
import {tsTypeWriter} from './tsTypeWriter';

export const writers: Writer[] = [
  tsDefWriter,
  tsTypeWriter,
  tsMockWriter,
  tsActionWriter,
  tsActionTestWriter,
  tsReducerTestWriter,
  fileWrapperWriter,
];
