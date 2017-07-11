import * as fs from 'fs';
import * as promisify from 'es6-promisify';
import * as stripJsonComments from 'strip-json-comments';

import {Writer} from '$gen/types';
import {writers} from '$webdev-genstack';

//import {userStack} from '$gen';

// TODO this is expected to run only in node.. do something to enforce that or something

// TODO doesn't get the correct type, had to manually add
const readFile: (path: string, options: {encoding: 'utf8'}) => Promise<string> = promisify(
  fs.readFile,
);

export const loadCommentedJson = async (path: string): Promise<any> => {
  const contents = await readFile(path, {encoding: 'utf8'});
  const stripped = stripJsonComments(contents);
  const parsed = JSON.parse(stripped);
  return parsed;
};

// The list of writers determines what gets written to the results data
// TODO move this to config
export async function getWritersList(): Promise<Writer[]> {
  return writers;
  // console.log('userStack', userStack())
  // const stack = await import(userStack());
  // return stack.writers;
}
