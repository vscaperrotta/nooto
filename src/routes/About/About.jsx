/**
 *
 * About
 *
 * @author Vittorio Scaperrotta
 * @date 17-Nov-2024
*/

import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import PageTemplate from 'Components/PageTemplate';
import Anchor from 'Components/Anchor';
import styles from './About.module.scss';

const About = () => {
  const navigate = useNavigate();

  return (
    <PageTemplate
      isAbout
      className={styles.container}
    >
      <h1 className={styles.title}>About</h1>
      <p className={styles.update}>Last updated 06 Dec, 2024</p>
      <p className={styles.release}>Release 1.0.0</p>
      <div className={styles.content}>
        <p className={styles.paragraph}>
          This project is an exercise in style. It is inspired by the project <Anchor label='Scrivi.la' href='https://scrivi.la/' /> by Ricardo Palombo, whose content and project I admire.
        </p>
        <p className={styles.paragraph}>
          In creating my own portfolio, I found the idea of trying to replicate, with different technologies more akin to my background, the project he proposed niteresting.
        </p>
        <p className={styles.paragraph}>
          In this exercise, I am also going to integrate some features such as adding a tag and the possibility of changing fonts.
        </p>
      </div>
    </PageTemplate>
  )
}

About.propTypes = {};

export default About;
