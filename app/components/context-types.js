import React from 'react';
// import { intlShape } from 'react-intl';

const contextTypes = {
  history: React.PropTypes.object.isRequired,
  location: React.PropTypes.object.isRequired,
  flux: React.PropTypes.object
//  intl: intlShape
};

export default contextTypes;
