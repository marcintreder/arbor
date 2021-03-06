/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import { Fragment } from 'react';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';
import 'react-tippy/dist/tippy.css';
import { Tooltip as TippyTooltip } from 'react-tippy';

import { borderRadius } from './theme';
import Text from './Text';

const globalTippyStyles = css`
  .tippy-tooltip.arbor-theme {
    border-radius: ${borderRadius.small};
    padding: 0;
  }
`;

const Tooltip = ({ text, children, theme, ...props }) => {
  const tooltipText = (
    <Text
      {...{
        px: 'smaller',
        py: 'smallest',
        fontSize: 'size2',
        color: 'white',
        theme
      }}
    >
      {text}
    </Text>
  );

  return (
    <Fragment>
      <Global styles={globalTippyStyles} />

      <TippyTooltip
        {...{
          ...props,
          theme: 'arbor',
          arrow: true,
          html: tooltipText,
          distance: 8,
          duration: 300,
          updateDuration: 0,
          arrowSize: 'small',
          animation: 'fade',
          inertia: true,
          animateFill: false
        }}
      >
        {children}
      </TippyTooltip>
    </Fragment>
  );
};

Tooltip.propTypes = {
  /**
   * Text to display within the tooltip when it is displayed
   * */
  text: PropTypes.string.isRequired,

  /**
   * Node which will trigger the tooltip. This should be either an Icon, Button,
   * or Link.
   * */
  children: PropTypes.element.isRequired
};

export default withTheme(Tooltip);
