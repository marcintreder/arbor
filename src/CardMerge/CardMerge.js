import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

const CardMerge = props => <Card {...props} />;

CardMerge.propTypes = {
  children: PropTypes.node.isRequired
};

export { CardMerge as default };
