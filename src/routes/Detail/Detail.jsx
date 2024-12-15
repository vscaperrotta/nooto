/**
 *
 * Detail
 *
 * @author Vittorio Scaperrotta
 * @date 17-Nov-2024
*/

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ActionsBar from 'Components/ActionsBar';
import PageTemplate from 'Components/PageTemplate';
import Textarea from 'Components/Textarea';
import InputField from 'Components/InputField';
import icons from 'Database/icons';
import { generateId, nullSafe } from 'Utils/globalMethods';
import * as NotesActions from 'Store/actions/notes.js';
import languages from './language.jsx';
import styles from './Detail.module.scss';
import { useIntl } from 'react-intl';

const Detail = (props) => {
  const dispatch = useDispatch();
  const refTitle = useRef();
  const refSubtitle = useRef();
  const refContent = useRef();
  const intl = useIntl()

  const [valueTitle, setValueTitle] = useState(nullSafe(() => props.detail.title, ''));
  const [valueSubtitle, setValueSubtitle] = useState(nullSafe(() => props.detail.tag, ''));
  const [valueContent, setValueContent] = useState(nullSafe(() => props.detail.content, ''));
  const [isSave, setIsSave] = useState(false);
  const [isExport, setIsExport] = useState(false);

  const TITLE = 'TITLE_ID';
  const SUBTITLE = 'SUBTITLE_ID';
  const CONTENT = 'CONTENT_ID';

  function handleChangeTitle(event) {
    setValueTitle(event.target.value);
  };

  function handleChangeSubtitle(event) {
    setValueSubtitle(event.target.value);
  };

  function handleChangeContent(event) {
    setValueContent(event.target.value);
  };

  function handleSave() {
    dispatch(NotesActions.doAddNote({
      id: nullSafe(() => props.detail.id, generateId()),
      title: refTitle.current.value === '' ? 'Untitle' : refTitle.current.value,
      tag: refSubtitle.current.value,
      content: refContent.current.value,
      date: Date.now(),
    }))

    setIsSave(true);

    setTimeout(() => {
      setIsSave(false);
    }, 3000);
  }

  function handleExport(id) {
    dispatch(NotesActions.doExportNote({
      id: id
    }))

    setIsExport(true);

    setTimeout(() => {
      setIsExport(false);
    }, 3000);
  }

  console.log(languages)

  return (
    <>
      <ActionsBar>
        <button
          onClick={() => handleSave()}
        >
          {icons.save.icon}
        </button>
        <button
          onClick={() => handleExport(props.detail.id)}
        >
          {icons.download.icon}
        </button>
      </ActionsBar>

      <PageTemplate
        isDetail
        className={styles.container}
      >
        <div className={styles.content}>

          {/* Title */}
          <div className={styles.title}>
            <InputField
              isTitle
              ref={refTitle}
              id={TITLE}
              placeholder={intl.formatMessage(languages.titlePlaceholder)}
              value={valueTitle}
              onChange={handleChangeTitle}
            />
          </div>

          {/* Tag */}
          <div className={styles.title}>
            <InputField
              isSubtitle
              ref={refSubtitle}
              id={SUBTITLE}
              placeholder={intl.formatMessage(languages.subtitlePlaceholder)}
              value={valueSubtitle}
              onChange={handleChangeSubtitle}
            />
          </div>

          {/* Detail */}
          <div className={styles.text}>
            <Textarea
              ref={refContent}
              id={CONTENT}
              placeholder={intl.formatMessage(languages.contentPlaceholder)}
              value={valueContent}
              onChange={handleChangeContent}
            />
          </div>
        </div>
        <p className={`${styles.alert} ${styles.save} ${isSave ? styles.isActive : ''}`}>
          {languages.save}
        </p>
        <p className={`${styles.alert} ${styles.export} ${isExport ? styles.isActive : ''}`}>
          {languages.export}
        </p>
      </PageTemplate>
    </>
  )
}

Detail.propTypes = {
  detail: PropTypes.object
};

export default Detail;
