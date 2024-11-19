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
  id: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  target: PropTypes.string,
};

export default Anchor;
