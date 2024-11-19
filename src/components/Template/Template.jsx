/**
 *
 * Template
 *
 * @author Vittorio Scaperrotta
 * @date 17-Nov-2024
*/

import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'Components/Footer';
import ActionsBar from 'Components/ActionsBar';
import styles from './Template.module.scss';

/**
 * Template component
 *
 */
const Template = (props) => {
  return (
    <main className={styles.main}>
      <ActionsBar />
      <div className={styles.content}>
        {props.children}
      </div>
      <Footer />
    </main>
  )
}

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
