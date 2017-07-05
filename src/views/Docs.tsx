import * as React from 'react';

import * as defs from '../defs';
import {logger} from '../utils/logger';

import {DocsDefinitions} from './DocsDefinitions';

const dbg = logger('Docs', {count: ['render']});

export interface Props extends React.ClassAttributes<any> {
  def: defs.AppDef;
}

export class Docs extends React.PureComponent<Props> {
  render(): JSX.Element {
    dbg('render', this);
    const {def} = this.props;
    return (
      <div className="Docs">
        <h2>docs</h2>
        <DocsDefinitions def={def} />
      </div>
    );
  }
}
