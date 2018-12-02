import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const IconMerge = props => <Icon {...props} />;

IconMerge.propTypes = {
  name: PropTypes.oneOf([
    'checkbox-marked-circle-outline',
    'cr-logo',
    'download',
    'chat-bubble-outline',
    'thumb-up-outline',
    'thumb-down-outline'
  ]),
  rotation: PropTypes.oneOf(['90', '180', '270', 'no']),
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
  onClick: PropTypes.func,
  onHover: PropTypes.func
};

IconMerge.defaultProps = {
  name: 'cr-logo',
  rotation: 'no',
  color: 'blueLighter',
  onClick: () => console.log('click'),
  onHover: () => console.log('click')
};

export { IconMerge as default };
