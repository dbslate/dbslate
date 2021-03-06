import {ExpressMiddleware} from '../types';
import * as cookieParser from 'cookie-parser';

let middleware: ExpressMiddleware;

// TODO refactor/rename? currently only used for Primus
export function cookieMiddleware(secret: string): ExpressMiddleware {
  return (
    middleware ||
    (middleware = cookieParser(secret, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
      secure: process.env.NODE_ENV === 'production',
      // domain: process.env.NODE_ENV === 'production' ? 'foo.com' : undefined,
    }))
  );
}
