import React from 'react';
import styled, { cx } from 'react-emotion';
import { color, fontSize } from 'styled-system';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

const StyledIcon = styled.i`
  ${color};
  ${fontSize};
`;

StyledIcon.propTypes = {
  ...color.propTypes,
  ...fontSize.propTypes
};

export const Icon = ({ name, theme, ...props }) => {
  const { iconFontPrefix } = theme;

  return (
    <StyledIcon
      className={cx(iconFontPrefix, `${iconFontPrefix}-${name}`)}
      {...props}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default withTheme(Icon);
