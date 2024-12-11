/**
 *
 * Anchor
 *
 * @author Vittorio Scaperrotta
 * @date 18-Nov-2024
*/

import React from 'react';
import PropTypes from 'prop-types';

const IconSave = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={props.stroke || '#000000'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
  )
}

IconSave.propTypes = {
  stroke: PropTypes.string,
};

export default IconSave;
