/**
 *
 * Detail
 *
 * @author Vittorio Scaperrotta
 * @date 17-Nov-2024
*/

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PageTemplate from 'Components/PageTemplate';
import Textarea from 'Components/Textarea';
import { generateId } from 'Utils/globalMethods';
import * as actions from 'Store/actions/notes.js';
import styles from './Detail.module.scss';

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refTitle = useRef();
  const refContent = useRef();

  function handleAddNote() {
    dispatch(actions.doAddNote({
      id: generateId(),
      title: refTitle.current.value,
      content: refContent.current.value,
      date: Date.now(),
    }))
  }

  return (
    <PageTemplate className={styles.container}>

      <div className={styles.title}>
        <Textarea
          ref={refTitle}
          id="title"
          placeholder='Title here...'
        />
      </div>

      <div className={styles.content}>
        <Textarea
          content
          ref={refContent}
          id="content"
          placeholder='Content here...'
        />
      </div>

      <button
        onClick={() => handleAddNote()}
      >
        SALVA NOTA
      </button>
      <button
        onClick={() => navigate({ pathname: '/' })}
      >
        Torna alle note
      </button>
    </PageTemplate>
  )
}

Detail.propTypes = {};

export default Detail;
