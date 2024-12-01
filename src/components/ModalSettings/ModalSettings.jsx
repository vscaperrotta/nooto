/**
 *
 * ModalSettings
 *
 * @author Vittorio Scaperrotta
 * @date 18-Nov-2024
*/

import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalSettings.module.scss';

const ModalSettings = (props) => {
  const fontOptions = ['Arial', 'Roboto', 'Times New Roman', 'Montserrat'];

  return (
    <div className={styles.modalBackground}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={props.onClose}>
          &times;
        </button>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Personalizzazione</h2>
        </div>
        <div className={styles.modalBody}>

          {/* Sezione 1: Personalizzazione dei Font */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Fonts Customization</h3>
            <div className={styles.fontTiles}>
              {fontOptions.map((font, index) => (
                <div key={index} className={styles.fontTile}>
                  {font}
                </div>
              ))}
            </div>
          </div>

          {/* Sezione 2: Customizzazione tema */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Opzione 2</h3>
            {/* Switch temi css */}
          </div>

        </div>
        <div className={styles.modalFooter}>
          <button
            className={`${styles.footerButton} ${styles.cancelButton}`}
            onClick={props.onClose}
          >
            ANNULLA
          </button>
          <button
            className={`${styles.footerButton} ${styles.saveButton}`}
            onClick={props.onSave}
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
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  fontOptions: PropTypes.array
};

export default ModalSettings;
