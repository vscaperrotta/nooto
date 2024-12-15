/**
 *
 * Template
 *
 * @author Vittorio Scaperrotta
 * @date 17-Nov-2024
*/

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import modals from 'Utils/modalsMapping';
import Footer from 'Components/Footer';
import styles from './Template.module.scss';


const Template = (props) => {

  let flowModal = null;

  if (props.flowModalId !== null) {
    flowModal = modals[props.flowModalId]
  }

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-font", props.font);
  }, [props.font])

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", props.theme);
  }, [props.theme])

  return (
    <main className={styles.main}>
      {flowModal}
      {props.children}
      <Footer />
    </main>
  )
}

Template.propTypes = {
  children: PropTypes.node,
  flowModalId: PropTypes.string,
  modalSaved: PropTypes.bool,
  font: PropTypes.string,
  theme: PropTypes.string,
};

export default Template;
