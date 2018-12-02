import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../Paragraph';

const ParagraphMerge = props => <Paragraph {...props} />;

ParagraphMerge.propTypes = {
  variant: PropTypes.oneOf(['ui', 'longForm', 'tiny']),
  children: PropTypes.string.isRequired
};

ParagraphMerge.defaultProps = {
  variant: 'longForm'
};

export { ParagraphMerge as default };
