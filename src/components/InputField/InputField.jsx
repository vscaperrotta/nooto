/**
 *
 * InputField
 *
 * @author Vittorio Scaperrotta
 * @date 18-Nov-2024
*/

import React, { useEffect, forwardRef } from "react";
import PropTypes from 'prop-types';
import styles from './InputField.module.scss';

const InputField = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className={`
        ${styles.field}
        ${props.isTitle ? styles.isTitle : ''}
        ${props.isContent ? styles.isContent : ''}
      `}
      name={props.id}
      id={props.id}
      placeholder={props.placeholder}
      rows={props.rows}
      autoComplete="off"
      value={props.value}
      onChange={props.onChange}
    />
  )
})

InputField.propTypes = {
  ref: PropTypes.func,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  isTitle: PropTypes.bool,
  isContent: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputField;
