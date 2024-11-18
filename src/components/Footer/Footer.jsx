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
import styles from './Footer.module.scss';

const Footer = () => {
  const navigate = useNavigate();

  function handleAbout() {
    navigate({ pathname: '/about' })
  }

  return (
    <div className={styles.container}>
      <button
        onClick={() => handleAbout()}
      >
        About
      </button>
    </div>
  )
}

Footer.propTypes = {};

export default Footer;
