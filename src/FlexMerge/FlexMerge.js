import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../Flex';

const FlexMerge = props => <Flex {...props} />;

FlexMerge.propTypes = {
  children: PropTypes.node.isRequired,
  alignSelf: PropTypes.oneOf([
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
  ]),
  alignItems: PropTypes.oneOf([
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
    'normal'
  ]),
  justifyContent: PropTypes.oneOf([
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
    'center',
    'start',
    'end',
    'flex-start',
    'flex-end',
    'left',
    'right',
    'inherit',
    'initial',
    'unset'
  ]),
  flexDirection: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
    'inherit',
    'initial',
    'unset'
  ]),
  flex: PropTypes.string
};

FlexMerge.defaultProps = {
  alignSelf: 'flex-start',
  alignItems: 'center',
  justifyContent: 'start',
  flexDirection: 'row',
  flex: ''
};

export { FlexMerge as default };
