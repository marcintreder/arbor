import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';

const TextMerge = props => <Text {...props} />;

TextMerge.propTypes = {
  children: PropTypes.string.isRequired,
  fontSize: PropTypes.oneOf([
    'size1',
    'size2',
    'size3',
    'size4',
    'size5',
    'size6',
    'size7'
  ]),
  lineHeight: PropTypes.oneOf(['small', 'large']),
  textAlign: PropTypes.oneOf(['right', 'left', 'center', 'justify']),
  space: PropTypes.oneOf([
    'smallest',
    'smaller',
    'small',
    'regular',
    'large',
    'larger',
    'largest'
  ]),
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

TextMerge.defaultProps = {
  fontSize: 'size4',
  lineHeight: 'small',
  textAlign: 'left',
  space: 'regular',
  color: 'grey100'
};

export { TextMerge as default };
