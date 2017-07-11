export * from './defs';
export * from './generate';
export * from './types';
export * from './validate';

import * as fp from 'path';

//// TODO should be discovered

// user's working project dir
export const userProjectDir = () => fp.resolve(__dirname, '../_userProject');

// TODO this should be package name not path
// user's chosen gen stack
//export const userStack = () => '$webdev-genstack';
//export const userStack = () => '$webdev-genstack';

// path to gen package dir which contains/*.def.json
export const genPackageDir = () => '../../src/gen';
