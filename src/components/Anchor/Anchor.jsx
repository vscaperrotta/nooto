/**
 *
 * Anchor
 *
 * @author Vittorio Scaperrotta
 * @date 18-Nov-2024
*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Anchor.module.scss';

const Anchor = (props) => {
  return (
    <a
      className={styles.container}
      id={props.id}
      href={props.href}
      onClick={props.onClick}
      title={props.label}
      target={props.target ? props.target : '_blank'}
    >
      {props.label}
    </a>
  )
}

Anchor.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Anchor;
