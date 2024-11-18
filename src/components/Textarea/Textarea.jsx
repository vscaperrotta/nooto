/**
 *
 * Textarea
 *
 * @author Vittorio Scaperrotta
 * @date 18-Nov-2024
*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Textarea.module.scss';

const Textarea = (props) => {
  return (
    <textarea
      ref={props.ref}
      className={`
        ${styles.field}
        ${props.content ? styles.content : ''}
      `}
      name={props.id}
      id={props.id}
      placeholder={props.placeholder}
    />
  )
}

Textarea.propTypes = {
  ref: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default Textarea;
