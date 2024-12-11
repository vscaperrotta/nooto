/**
 *
 * About
 *
 * @author Vittorio Scaperrotta
 * @date 17-Nov-2024
*/

import React from 'react';
import PropTypes from 'prop-types';
import PageTemplate from 'Components/PageTemplate';
import ActionsBar from 'Components/ActionsBar';
import Anchor from 'Components/Anchor';
import languages from './language.jsx';
import styles from './About.module.scss';

const About = () => {

  return (
    <PageTemplate
      isAbout
      className={styles.container}
    >
      <ActionsBar />
      <h1 className={styles.title}>{languages.title}</h1>
      <p className={styles.update}>{languages.lastUpdated}</p>
      <p className={styles.release}>{languages.release}</p>
      <div className={styles.content}>
        <p className={styles.paragraph}>
          {languages.content1}
          <Anchor label={languages.scrivilaLabel} href={languages.scrivilaHref} />
        </p>
        <p className={styles.paragraph}>
          {languages.content2}
        </p>
        <p className={styles.paragraph}>
          {languages.content3}
          <Anchor label={languages.iconsLabel} href={languages.iconHref} />
        </p>
      </div>
    </PageTemplate>
  )
}

About.propTypes = {};

export default About;
