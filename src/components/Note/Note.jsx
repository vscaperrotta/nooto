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
        {props.tag ? (
          <p className={styles.tag}>
            {props.tag}
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
              {action.src ? <img className={styles.icon} src={action.src} alt={action.alt} /> : null}
              {action.label ? <span className={styles.label}>{props.label}</span> : null}
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
