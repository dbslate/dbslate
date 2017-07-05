import * as React from 'react';

import * as defs from '../defs';
import {logger} from '../utils/logger';

import {Frame} from './Frame';
import {DocsDefinition} from './DocsDefinition';

const dbg = logger('DocsDefinitions', {count: ['render']});

export interface Props extends React.ClassAttributes<any> {
  def: defs.AppDef;
}

export class DocsDefinitions extends React.PureComponent<Props> {
  render(): JSX.Element {
    dbg('render', this);
    const {def} = this.props;
    const indexId = `docs-defs-index-${def.name}`;
    return (
      <div className="DocsDefinitions">
        <Frame>
          <h3 id={indexId}>definitions</h3>
          <ul>
            {Object.keys(def.definitions).map(d =>
              <li key={d}><a href={`#doc-def-${d}`}>{d}</a></li>,
            )}
          </ul>
          {Object.keys(def.definitions).map(d =>
            <Frame key={d} id={`doc-def-${d}`}>
              <DocsDefinition key={d} def={def.definitions[d]} />
              <a href={`#${indexId}`}>^</a>
            </Frame>,
          )}
        </Frame>
      </div>
    );
  }
}
