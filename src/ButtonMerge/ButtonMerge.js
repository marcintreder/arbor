import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const ButtonMerge = props => <Button {...props} />;

ButtonMerge.propTypes = {
  /**
   * Disabled state of button
   * */
  disabled: PropTypes.bool,

  /**
   * Button size
   * */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'jumbo']),

  /**
   * Button variant.
   * */
  variant: PropTypes.oneOf(['primary', 'secondary', 'minimal']),

  /**
   * Property to set for a button to take the full width of it's parent
   * container.
   * */
  fullWidth: PropTypes.bool,

  iconStart: PropTypes.element,

  iconEnd: PropTypes.element,
  onClick: PropTypes.func,
  onHover: PropTypes.func
};

ButtonMerge.defaultProps = {
  disabled: false,
  size: 'large',
  variant: 'primary',
  fullWidth: false,
  iconStart: undefined,
  iconEnd: undefined,
  onClick: () => console.log('click'),
  onHover: () => console.log('click')
};

export { ButtonMerge as default };
