/**
 *
 * Home
 *
 * @author Vittorio Scaperrotta
 * @date 16-Nov-2024
*/

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import * as NotesActions from 'Store/actions/notes.js';

import icons from 'Database/icons';
import PageTemplate from 'Components/PageTemplate';
import Note from 'Components/Note';

import languages from './language.jsx';
import styles from './Home.module.scss';


const Home = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleNewNote() {
    navigate({ pathname: '/note' })
  }

  function handleEdit(id) {
    dispatch(NotesActions.doEditNote(id))
    navigate({ pathname: '/note' })
  }

  function handleDelete(id) {
    dispatch(NotesActions.doDeleteNote(id))
  }

  return (
    <PageTemplate className={`
      ${styles.container}
      ${props.notes.length === 0 ? styles.noNotes : ''}
      `}>
      <h1 className={styles.kanji}>
        {languages.kanji}
      </h1>
      <div className={styles.header}>
        {props.notes.length > 0 ? (
          <>
            <h1 className={styles.title}>Notes</h1>
          </>
        ) : (
          <>
            <h1 className={styles.title} onClick={() => handleNewNote()}>
              {languages.title}
            </h1>
            <p className={styles.subtitle} onClick={() => handleNewNote()}>
              {languages.subtitle}
            </p>
          </>
        )}
      </div>

      <div className={styles.list}>

        {props.notes.length > 0 ? (
          <div className={styles.newNote}>
            <Note
              title={languages.newNote}
              onClick={() => handleNewNote()}
            />
          </div>
        ) : null}

        {props.notes.map((item) => (
          <div key={item.id} className={styles.item}>
            <Note
              id={item.id}
              title={item.title}
              date={moment(item.date).format('GG/MM/YYYY')}
              actions={[
                {
                  icon: icons.edit.icon,
                  alt: icons.edit.alt,
                  onClick: () => handleEdit(item.id),
                },
                {
                  icon: icons.trash.icon,
                  alt: icons.trash.alt,
                  onClick: () => handleDelete(item.id),
                },
              ]}
            />
          </div>
        ))}
      </div>
    </PageTemplate>
  )
}

Home.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};

export default Home;
