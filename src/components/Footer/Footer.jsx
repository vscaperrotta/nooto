/**
 *
 * Footer
 *
 * @author Vittorio Scaperrotta
 * @date 17-Nov-2024
*/

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Anchor from 'Components/Anchor';
import * as ModalActions from 'Store/actions/modals.js';
import languages from './language.jsx';
import styles from './Footer.module.scss';

const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleAbout() {
    navigate({ pathname: '/about' })
  }

  function handleSettings() {
    dispatch(ModalActions.doOpenModal('MODAL_SETTING'))
  }

  return (
    <div className={styles.container}>
      <Anchor
        label={languages.aboutLabel}
        onClick={() => handleAbout()}
      />
      <Anchor
        label={languages.settingsLabel}
        onClick={() => handleSettings()}
      />
      <Anchor
        label={languages.codeLabel}
        href={'https://github.com/vscaperrotta/nooto'}
      />
    </div>
  )
}

Footer.propTypes = {};

export default Footer;
