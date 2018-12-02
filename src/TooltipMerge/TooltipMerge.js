import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';

const TooltipMerge = props => <Tooltip {...props} />;

TooltipMerge.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export { TooltipMerge as default };
