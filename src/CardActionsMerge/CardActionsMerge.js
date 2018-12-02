import React from 'react';
import PropTypes from 'prop-types';
import CardActions from '../CardActions';

const CardActionsMerge = props => <CardActions {...props} />;

CardActionsMerge.propTypes = {
  children: PropTypes.node.isRequired
};

export { CardActionsMerge as default };
