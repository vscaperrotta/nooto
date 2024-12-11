/**
 *
 * Anchor
 *
 * @author Vittorio Scaperrotta
 * @date 18-Nov-2024
*/

import React from 'react';
import PropTypes from 'prop-types';

const IconClose = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.stroke || '#000000'}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-x">
      <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  )
}

IconClose.propTypes = {
  stroke: PropTypes.string,
};

export default IconClose;
