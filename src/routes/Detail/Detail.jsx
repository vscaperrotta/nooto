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
import ActionsBar from 'Components/ActionsBar';
import PageTemplate from 'Components/PageTemplate';
import Textarea from 'Components/Textarea';
import icons from 'Database/icons';
import { generateId, nullSafe } from 'Utils/globalMethods';
import * as NotesActions from 'Store/actions/notes.js';
import styles from './Detail.module.scss';

const Detail = (props) => {
  const dispatch = useDispatch();
  const refTitle = useRef();
  const refContent = useRef();

  const [valueTitle, setValueTitle] = useState(nullSafe(() => props.detail.title, ''));
  const [valueSubtitle, setValueSubtitle] = useState(nullSafe(() => props.detail.content, ''));

  const TITLE = 'title';
  const CONTENT = 'content';

  // useEffect(() => {
  //   console.log(refTitle.current.value);
  //   console.log(refContent.current.value);
  // }, [refTitle, refContent])

  function handleChangeTitle(event) {
    setValueTitle(event.target.value);
  };

  function handleChangeSubtitle(event) {
    setValueSubtitle(event.target.value);
  };

  function handleSave() {
    dispatch(NotesActions.doAddNote({
      id: nullSafe(() => props.detail.id, generateId()),
      title: refTitle.current.value,
      content: refContent.current.value,
      date: Date.now(),
    }))

    setTimeout(() => {
      dispatch(NotesActions.doConfirmSave(false))
    }, 3000);
  }

  function handleExport() {
    alert('handleExport');
  }

  return (
    <>
      <ActionsBar>
        <button
          onClick={() => handleSave()}
        >
          <img src={icons.save.src} alt={icons.save.alt} />
        </button>
        <button
          onClick={() => handleExport()}
        >
          <img src={icons.download.src} alt={icons.download.alt} />
        </button>
      </ActionsBar>

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
        </div>
        {props.modalSaved ? (
          <h1 className={styles.savedMessage}>
            Saved!
          </h1>
        ) : null}
      </PageTemplate>
    </>
  )
}

Detail.propTypes = {
  detail: PropTypes.object,
  modalSaved: PropTypes.bool,
};

export default Detail;
