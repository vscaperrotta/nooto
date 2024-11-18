/**
 *
 * Note
 *
 * @author Vittorio Scaperrotta
 * @date 17-Nov-2024
*/

import React from 'react';
import PropTypes from 'prop-types';
import { nullSafe } from 'Utils/globalMethods';
import styles from './Note.module.scss';

const Note = (props) => {
  return (
    <div
      className={`${styles.container} ${props.onClick ? styles.onClick : ''}`}
      onClick={props.onClick}
    >
      <div className={styles.content}>
        <h3 className={styles.title}>
          {props.title}
        </h3>
        {props.description ? (
          <p className={styles.description}>
            {props.description}
          </p>
        ) : null}
        <p className={styles.date}>
          {props.date}
        </p>
      </div>
      <div className={styles.actions}>
        {nullSafe(() => props.actions, [])
          .map((action, index) => (
            <button
              key={index}
              className={styles.action}
              onClick={action.onClick}
            >
              {action.label}
            </button>
          ))}
      </div>
    </div>
  )
}

Note.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};

export default Note;
