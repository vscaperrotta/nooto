/**
 *
 * PageTemplate
 *
 * @author Vittorio Scaperrotta
 * @date 17-Nov-2024
*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageTemplate.module.scss';

const PageTemplate = (props) => {
  return (
    <div className={`${styles.container} ${props.className}`}>
      {props.children}
    </div>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PageTemplate;
