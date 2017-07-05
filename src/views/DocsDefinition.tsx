import * as React from 'react';

import * as defs from '../defs';
import {logger} from '../utils/logger';

const dbg = logger('DocsDefinition', {count: ['render']});

export interface Props extends React.ClassAttributes<any> {
  def: defs.SchemaDefinition;
}

// TODO expand from here
const DefType = ({def}: {def: defs.SchemaDefinition}) =>
  <div>{JSON.stringify(def.type)}</div>;

export class DocsDefinition extends React.PureComponent<Props> {
  render(): JSX.Element {
    dbg('render', this);
    const {def} = this.props;
    return (
      <div className="DocsDefinition">
        <h4>{def.title}</h4>
        <DefType def={def} />
        {/*TODO make these helper components*/}
        {def.properties ? Object.keys(def.properties).join(' ⋅ ') : null}
        {def.code ? <pre>{def.code.declaration}</pre> : null}
      </div>
    );
  }
}
