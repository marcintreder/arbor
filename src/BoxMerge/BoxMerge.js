import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

const BoxMerge = props => <Box {...props} />;

BoxMerge.propTypes = {
  children: PropTypes.node.isRequired,
  boxShadow: PropTypes.string,
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
  ]),
  height: PropTypes.number,
  maxWidth: PropTypes.number,
  width: PropTypes.number,
  space: PropTypes.string,
  textAlign: PropTypes.oneOf(['right', 'left', 'center', 'justify'])
};

BoxMerge.defaultProps = {
  boxShadow: 'none',
  color: 'grey10',
  height: 100,
  width: 100,
  maxWidth: 300,
  space: '',
  textAlign: 'left'
};

export { BoxMerge as default };
