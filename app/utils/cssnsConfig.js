import createCssNs from 'css-ns';
import React from 'react';

export default namespace => createCssNs({
  namespace,
  React,
  // exclude Font Awesome classes, as they have their own "fa-" namespace
  exclude: /(^fa$|^fa-|^col-|^row$|^btn|^list-unstyled|^pull-|^glyph|^form-)/ // eslint-disable-line max-len
});
