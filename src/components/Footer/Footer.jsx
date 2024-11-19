/**
 *
 * Footer
 *
 * @author Vittorio Scaperrotta
 * @date 17-Nov-2024
*/

import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Anchor from 'Components/Anchor';
import styles from './Footer.module.scss';

const Footer = () => {
  const navigate = useNavigate();

  function handleAbout() {
    navigate({ pathname: '/about' })
  }

  function handleSettings() {
    alert('Settings');
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

export default Footer;
