import React from 'react';
import PropTypes from 'prop-types';
import CardRow from '../CardRow';

const CardRowMerge = props => <CardRow {...props} />;

CardRowMerge.propTypes = {
  children: PropTypes.node.isRequired
};

export { CardRowMerge as default };
