import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid';

const GridMerge = props => <Grid {...props} />;

GridMerge.propTypes = {
  children: PropTypes.node.isRequired,
  gridGap: PropTypes.oneOf([
    'smallest',
    'smaller',
    'small',
    'regular',
    'large',
    'larger',
    'largest'
  ]),
  gridTemplateColumns: PropTypes.string,
  justifyItems: PropTypes.oneOf([
    'center',
    'start',
    'end',
    'self-start',
    'self-end',
    'flex-start',
    'flex-end',
    'baseline',
    'first baseline',
    'last baseline',
    'stretch',
    'inherit',
    'initial',
    'unset',
    'auto',
    'normal'
  ])
};

GridMerge.defaultProps = {
  gridGap: 'regular',
  gridTemplateColumns: 'repeat(2, 1fr)',
  justifyItems: 'left'
};

export { GridMerge as default };
