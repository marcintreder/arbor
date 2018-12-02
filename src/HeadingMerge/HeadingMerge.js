import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading';

const HeadingMerge = props => {
  const { type } = props;
  if (type === 'h1') {
    return <Heading.h1 {...props} />;
  }
  if (type === 'h2') {
    return <Heading.h2 {...props} />;
  }
  if (type === 'h3') {
    return <Heading.h3 {...props} />;
  }
  if (type === 'h4') {
    return <Heading.h4 {...props} />;
  }
  if (type === 'h5') {
    return <Heading.h5 {...props} />;
  }
  if (type === 'h6') {
    return <Heading.h6 {...props} />;
  }
  return <Heading {...props} />;
};

HeadingMerge.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  color: PropTypes.oneOf([
    'blueLighter',
    'blueLight',
    'blue',
    'blueDark',
    'blueDarkest',
    'grey10',
    'grey20',
    'grey30',
    'grey40',
    'grey50',
    'grey60',
    'grey70',
    'grey80',
    'grey90',
    'grey100',
    'white',
    'white10',
    'redLighter',
    'redLight',
    'red',
    'redDark',
    'greenLighter',
    'greenLight',
    'green',
    'greenDark',
    'black',
    'bronzeLight',
    'bronze',
    'bronzeDark'
  ])
};

HeadingMerge.defaultProps = {
  type: 'h1',
  color: 'grey10'
};

export { HeadingMerge as default };
