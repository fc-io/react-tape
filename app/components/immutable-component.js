import React from 'react';
import Immutable, { Map } from 'immutable';
import shallowEqual from 'shallowequal';
// import contextTypes from './context-types';
// import debug from 'debug';

export default class ImmComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {immutable: Map()};
  }
  static displayName = 'ImmComponent';
  static propTypes = {
    params: React.PropTypes.object,
    children: React.PropTypes.any
  }

  // static contextTypes = contextTypes;

  setImmState(state, cb) {
    const immutableNewState = Immutable.fromJS(state);
    const newstate = this.state.immutable.merge(immutableNewState);
    this.setState({immutable: newstate}, () => {
      if (cb) cb();
    });
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const shouldUpdate = !shallowEqual(nextProps, this.props) || !shallowEqual(nextState, this.state) || nextContext.intl.locale !== this.context.intl.locale;
    // debug('dev')('shouldComponentUpdate', this.constructor.displayName, shouldUpdate);
    return shouldUpdate;
  }
}
