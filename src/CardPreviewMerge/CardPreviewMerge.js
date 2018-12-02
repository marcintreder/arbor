import React from 'react';
import PropTypes from 'prop-types';
import CardPreview from '../CardPreview';

const CardPreviewMerge = props => <CardPreview {...props} />;

CardPreviewMerge.propTypes = {
  image: PropTypes.string
};

CardPreviewMerge.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-0.3.5&s=3d33b46544228d6420f683861bc8d7a6&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'
};

export { CardPreviewMerge as default };
