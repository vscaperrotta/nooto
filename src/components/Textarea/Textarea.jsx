/**
 *
 * Textarea
 *
 * @author Vittorio Scaperrotta
 * @date 18-Nov-2024
*/

import React, { forwardRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Textarea.module.scss";

const Textarea = forwardRef((props, ref) => {
  const [height, setHeight] = useState(360);
  const baseHeight = 360;
  const lineHeight = 36;

  const calculateHeight = (value) => {
    const lineBreaks = (value.match(/\n/g) || []).length;
    const rows = lineBreaks + 1;

    if (rows > 10) {
      const additionalHeight = (rows - 10) * lineHeight;
      return baseHeight + additionalHeight;
    }
    return baseHeight;
  };

  const handleInputChange = (event) => {
    const newHeight = calculateHeight(event.target.value);
    setHeight(newHeight);
    props.onChange(event);
  };

  useEffect(() => {
    const initialHeight = calculateHeight(props.value || "");
    setHeight(initialHeight);
  }, []);

  return (
    <textarea
      ref={ref}
      className={styles.field}
      style={{ height: `${height}px` }}
      name={props.id}
      id={props.id}
      placeholder={props.placeholder}
      autoComplete="off"
      value={props.value}
      onChange={handleInputChange}
    />
  );
});

Textarea.propTypes = {
  ref: PropTypes.func,
  id: PropTypes.string,
  placeholder: PropTypes.oneOfType[(PropTypes.string, PropTypes.object)],
  rows: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Textarea;