import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

const CircularProfilePic = props => {
  return <Image src={props.src} circular centered size="tiny" />;
};

CircularProfilePic.propTypes = {
  src: PropTypes.string.isRequired,
};

export default CircularProfilePic;
