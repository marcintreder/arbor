import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';

const InputMerge = props => <Input {...props} />;

InputMerge.propTypes = {
  label: PropTypes.string,
  caption: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'url',
    'email',
    'date',
    'tel',
    'search',
    'password',
    'number'
  ]),
  placeholder: PropTypes.string,
  large: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

InputMerge.defaultProps = {
  type: 'text',
  id: 'merge',
  label: 'merge',
  caption: '',
  placeholder: 'placeholder',
  large: false,
  onChange: () => console.log('click'),
  onFocus: () => console.log('focus'),
  onBlur: () => console.log('blur')
};

export { InputMerge as default };
