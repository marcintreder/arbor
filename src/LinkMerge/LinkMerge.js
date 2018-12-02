import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

const LinkMerge = props => <Link {...props} />;

LinkMerge.propTypes = {
  variant: PropTypes.oneOf(['default', 'muted']),
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
  href: PropTypes.string,
  m: PropTypes.oneOf([
    'smallest',
    'smaller',
    'small',
    'regular',
    'large',
    'larger',
    'largest'
  ]),
  onClick: PropTypes.func
};

LinkMerge.defaultProps = {
  variant: 'default',
  fontSize: 'size1',
  href: 'http://uxpin.com',
  m: 'regular',
  onClick: () => console.log('click')
};

export { LinkMerge as default };
