/**
 *
 * ModalSettings
 *
 * @author Vittorio Scaperrotta
 * @date 18-Nov-2024
*/

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as ModalActions from 'Store/actions/modals';
import * as SettingsActions from 'Store/actions/settings';
import fonts from 'Database/fonts';
import themes from 'Database/themes';
import IconClose from 'Assets/IconClose';
import languages from './language.jsx';
import styles from './ModalSettings.module.scss';

const ModalSettings = (props) => {
  const dispatch = useDispatch();

  // State
  const [fontId, setFontId] = useState(props.font || null);
  const [themeId, setThemeId] = useState(props.theme || null);

  function closeModal() {
    dispatch(ModalActions.doOpenModal(null))
  }

  function handleClose() {
    closeModal()
  }

  function handleSelectFont(id) {
    setFontId(id)
    dispatch(SettingsActions.doUpdateSettings({ font: id }))
  }

  function handleSelectTheme(id) {
    setThemeId(id)
    dispatch(SettingsActions.doUpdateSettings({ theme: id }))
  }

  useEffect(() => {
    setFontId(props.font)
    setThemeId(props.theme)
  }, [props.font, props.theme])

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>
            {languages.title}
          </h2>
          <button className={styles.close} onClick={handleClose}>
            <IconClose />
          </button>
        </div>

        <div className={styles.body}>

          {/* Sezione 1: Personalizzazione dei Font */}
          <div className={styles.section}>
            <h3 className={styles.title}>
              {languages.fonts}
            </h3>
            <p className={styles.description}>
              {languages.fontsDescription}
            </p>
            <div className={styles.fontsList}>
              {fonts.map((item, index) => (
                <button
                  key={index}
                  className={`${styles.fontTile} ${fontId === item.id ? styles.selected : ''}`}
                  onClick={() => handleSelectFont(item.id)}
                >
                  <span
                    className={styles.example}
                    style={{
                      fontFamily: item.fontFamily
                    }}
                  >
                    {languages.fontsExample}
                  </span>
                  <p
                    className={styles.name}
                    style={{
                      fontFamily: item.fontFamily
                    }}>
                    {item.font}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Sezione 2: Customizzazione tema */}
          <div className={styles.section}>
            <h3 className={styles.title}>
              {languages.themes}
            </h3>
            <p className={styles.description}>
              {languages.themesDescription}
            </p>
            {/* Switch temi css */}
            <div className={styles.themesList}>
              {themes.map((item, index) => (
                <div
                  key={index}
                  className={styles.tile}>
                  <button
                    className={`${styles.theme} ${themeId === item.id ? styles.selected : ''}`}
                    onClick={() => handleSelectTheme(item.id)}
                  >
                    <div className={`${styles.triangle} ${styles.topLeft}`} style={{ background: item.primary }} />
                    <div className={`${styles.triangle} ${styles.bottomRight}`} style={{ background: item.secondary }} />
                  </button>
                  <p className={styles.name}>
                    {item.theme}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalSettings.propTypes = {
  isOpen: PropTypes.bool,
  font: PropTypes.string,
  theme: PropTypes.string,
};

export default ModalSettings;
