/**
 *
 * Template
 *
 * @author Vittorio Scaperrotta
 * @date 17-Nov-2024
*/

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import flowModalMap from 'Utils/flowModalMap';
import Footer from 'Components/Footer';
import ActionsBar from 'Components/ActionsBar';
import * as ModalActions from 'Store/actions/modals.js';
import styles from './Template.module.scss';


const Template = (props) => {

  let flowModal = null;

  if (props.flowModalId !== null) {
    flowModal = flowModalMap[props.flowModalId]
  }

  return (
    <main className={styles.main}>
      {flowModal}
      <div className={styles.content}>
        {props.children}
      </div>
      <Footer />
    </main>
  )
}

Template.propTypes = {
  children: PropTypes.node,
  flowModalId: PropTypes.string,
  modalSaved: PropTypes.bool,
};

export default Template;
