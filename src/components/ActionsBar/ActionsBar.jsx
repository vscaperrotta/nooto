/**
 *
 * ActionsBar
 *
 * @author Vittorio Scaperrotta
 * @date 18-Nov-2024
*/

import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import icons from 'Database/icons';
import styles from './ActionsBar.module.scss';
import * as NotesActions from 'Store/actions/notes.js';
import { useDispatch } from 'react-redux';

const ActionsBar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  function handleGoToHome() {
    navigate({ pathname: '/' })
    dispatch(NotesActions.doResetNote())
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {location.pathname !== '/' ? (
          <button
            className={styles.action}
            onClick={() => handleGoToHome()}
          >
            <img src={icons.home.src} alt={icons.home.alt} />
          </button>
        ) : null}
        {props.children !== null ? (
          <div>
            {props.children}
          </div>
        ) : null}
      </div>
    </div>
  )
}

ActionsBar.propTypes = {
  children: PropTypes.any
};

export default ActionsBar;
