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
        label='About'
        onClick={() => handleAbout()}
      />
      <Anchor
        label='Settings'
        onClick={() => handleSettings()}
      />
      <Anchor
        label='Code'
        href='https://github.com/vscaperrotta/remind.me'
      />
    </div>
  )
}

Footer.propTypes = {};

Footer.de = {};

export default Footer;
