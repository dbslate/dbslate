import * as React from 'react';

import * as t from '../types';
import * as defs from '../defs';
import {logger} from '../utils/logger';

import {Frame} from './Frame';

const dbg = logger('StateInspector', {count: ['render']});

export interface Props extends React.ClassAttributes<any> {
  state: t.ClientState;
  def: defs.AppDef;
}

export class StateInspector extends React.PureComponent<Props> {
  render(): JSX.Element {
    dbg('render', this);
    const {state} = this.props;
    return (
      <div className="StateInspector">
        <h2>state inspector</h2>
        <Frame>
          <pre>
            {JSON.stringify(state, null, 2)}
          </pre>
        </Frame>
      </div>
    );
  }
}
