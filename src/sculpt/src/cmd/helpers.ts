import * as fp from 'path';
import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as promisify from 'es6-promisify';
import * as stripJsonComments from 'strip-json-comments';

import {logger} from '$utils/log';

// TODO this is expected to run only in node.. do something to enforce that or something

// TODO doesn't get the correct type, had to manually add
const readFile: (path: string, options: {encoding: 'utf8'}) => Promise<string> = promisify(
  fs.readFile
);

export const loadCommentedJson = async (path: string): Promise<any> => {
  const contents = await readFile(path, {encoding: 'utf8'});
  const stripped = stripJsonComments(contents);
  const parsed = JSON.parse(stripped);
  return parsed;
};

export function saveFile(filename: string, contents: string): void {
  log('saving', filename);
  // ensure dir exists
  mkdirp.sync(fp.dirname(filename));
  fs.writeFileSync(filename, contents, {
    encoding: 'utf8',
  });
  log('saved~', filename);
}

export const log = logger('task:gen');
