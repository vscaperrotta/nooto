/**
 *
 * Detail
 *
 * @author Vittorio Scaperrotta
 * @date 17-Nov-2024
*/

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import PageTemplate from 'Components/PageTemplate';
import Textarea from 'Components/Textarea';
import { generateId, nullSafe } from 'Utils/globalMethods';
import * as actions from 'Store/actions/notes.js';
import styles from './Detail.module.scss';

const Detail = (props) => {
  const dispatch = useDispatch();
  const refTitle = useRef();
  const refContent = useRef();

  const [valueTitle, setValueTitle] = useState(nullSafe(() => props.detail.title, ''));
  const [valueSubtitle, setValueSubtitle] = useState(nullSafe(() => props.detail.content, ''));


  const TITLE = 'title';
  const CONTENT = 'content';

  function handleAddNote() {
    dispatch(actions.doAddNote({
      id: nullSafe(() => props.detail.id, generateId()),
      title: refTitle.current.value,
      content: refContent.current.value,
      date: Date.now(),
    }))
  }

  useEffect(() => {
    console.log(refTitle.current.value);
    console.log(refContent.current.value);
  }, [refTitle, refContent])

  const handleChangeTitle = (event) => {
    setValueTitle(event.target.value);
  };

  const handleChangeSubtitle = (event) => {
    setValueSubtitle(event.target.value);
  };

  return (
    <PageTemplate
      isDetail
      className={styles.container}
    >
      <div className={styles.content}>
        <div className={styles.title}>
          <Textarea
            isTitle
            ref={refTitle}
            id={TITLE}
            rows={1}
            placeholder='Title here...'
            value={valueTitle}
            onChange={handleChangeTitle}
          />
        </div>

        <div className={styles.text}>
          <Textarea
            isContent
            ref={refContent}
            id={CONTENT}
            rows={10}
            placeholder='Content here...'
            value={valueSubtitle}
            onChange={handleChangeSubtitle}
          />
        </div>
        <button
          onClick={() => handleAddNote()}
        >
          SALVA NOTA
        </button>
      </div>
    </PageTemplate>
  )
}

Detail.propTypes = {
  detail: PropTypes.object
};

export default Detail;
