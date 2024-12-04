/**
 *
 * ModalSettings
 *
 * @author Vittorio Scaperrotta
 * @date 18-Nov-2024
*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as ModalActions from 'Store/actions/modals';
import * as SettingsActions from 'Store/actions/settings';
import fonts from 'Database/fonts';
import themes from 'Database/themes';
import styles from './ModalSettings.module.scss';

const ModalSettings = (props) => {
  const dispatch = useDispatch();
  const [fontId, setFontId] = useState(null);
  const [themeId, setThemeId] = useState(null);

  function closeModal() {
    dispatch(ModalActions.doOpenModal(null))
  }

  function handleClose() {
    closeModal()
  }

  function handleCancel() {
    closeModal()
  }

  function handleSave() {
    dispatch(SettingsActions.doUpdateSettings({
      font: fontId,
      theme: themeId,
    }))
    closeModal()
  }

  function handleSelectFont(id) {
    setFontId(id)
  }

  function handleSelectTheme(id) {
    setThemeId(id)
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            Settings
          </h2>
        </div>
        <div className={styles.modalBody}>

          {/* Sezione 1: Personalizzazione dei Font */}
          <div className={styles.section}>
            <h3 className={styles.title}>
              Fonts
            </h3>
            <p className={styles.subtitle}>
              Choose you project font from Serif, Sans Serif and Slab.
            </p>
            <div className={styles.fontTiles}>
              {fonts.map((item, index) => (
                <button
                  key={index}
                  className={`${styles.fontTile} ${fontId === item.id ? styles.selected : ''}`}
                  onClick={() => handleSelectFont(item.id)}
                >
                  <span>Aa</span>
                  <p className={styles.fontName}>
                  {item.font}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Sezione 2: Customizzazione tema */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>
              Theme
            </h3>
            {/* Switch temi css */}
          </div>
          <div className={styles.themesList}>
            {themes.map((item, index) => (
              <div>
                <button
                  key={index}
                  className={`${styles.theme} ${themeId === item.id ? styles.selected : ''}`}
                  onClick={() => handleSelectTheme(item.id)}
                >
                </button>
                <p className={styles.fontName}>
                {item.theme}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.modalFooter}>
          <button
            className={`${styles.button} ${styles.cancel}`}
            onClick={handleCancel}
          >
            ANNULLA
          </button>
          <button
            className={`${styles.button} ${styles.save}`}
            onClick={handleSave}
          >
            SALVA
          </button>
        </div>
      </div>
    </div>
  );
};

ModalSettings.propTypes = {
  isOpen: PropTypes.bool,
  fontOptions: PropTypes.array
};

export default ModalSettings;
