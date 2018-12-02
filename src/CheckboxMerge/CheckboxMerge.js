import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/index';

const CheckboxMerge = props => <Checkbox {...props} />;

CheckboxMerge.propTypes = {
  /**
   * The checked attribute of the checkbox.
   */
  checked: PropTypes.bool,

  /**
   * When true, the checkbox is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The id attribute of the checkbox.
   */
  id: PropTypes.string.isRequired,

  /**
   * State in addition to "checked" and "unchecked".
   * When true, the checkbox displays a "minus" icon.
   */
  indeterminate: PropTypes.bool,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: PropTypes.bool,

  /**
   * Label of the checkbox.
   */
  label: PropTypes.string.isRequired,

  /**
   * The name attribute of the checkbox.
   */
  name: PropTypes.string.isRequired,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * The value attribute of the checkbox.
   */
  value: PropTypes.string.isRequired
};

CheckboxMerge.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false,
  isInvalid: false,
  onChange: () => {}
};

export { CheckboxMerge as default };
