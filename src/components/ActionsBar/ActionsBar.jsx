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
import * as actions from 'Store/actions/notes.js';
import { useDispatch } from 'react-redux';

const ActionsBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  function handleGoToHome() {
    navigate({ pathname: '/' })
    dispatch(actions.doResetNote())
  }

  function handleSave() {
    alert('handleSave');
  }

  function handleExport() {
    alert('handleExport');
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {location.pathname !== '/' ? (
          <button
            className={styles.action}
            onClick={() => handleGoToHome()}
          >
            <img className={styles.icon} src={icons.home.src} alt={icons.home.alt} />
          </button>
        ) : null}
        <div>
          {location.pathname === '/note' ? (
            <>
              <button
                className={styles.action}
                onClick={() => handleSave()}
              >
                <img className={styles.icon} src={icons.save.src} alt={icons.save.alt} />
              </button>
              <button
                className={styles.action}
                onClick={() => handleExport()}
              >
                <img className={styles.icon} src={icons.download.src} alt={icons.download.alt} />
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

ActionsBar.propTypes = {};

export default ActionsBar;
