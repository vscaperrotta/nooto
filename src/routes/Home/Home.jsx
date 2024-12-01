/**
 *
 * Home
 *
 * @author Vittorio Scaperrotta
 * @date 16-Nov-2024
*/

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { nullSafe } from 'Utils/globalMethods';
import icons from 'Database/icons';
import PageTemplate from 'Components/PageTemplate';
import Note from 'Components/Note';

import * as NotesActions from 'Store/actions/notes.js';
import styles from './Home.module.scss';


const Home = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleNewNote(id) {
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
      <div className={styles.header}>
        {props.notes.length > 0 ? (
          <>
            <h2 className={styles.title}>Notes</h2>
          </>
        ) : (
          <>
            <h2 className={styles.title} onClick={() => handleNewNote()}>Remind.Me</h2>
            <p className={styles.subtitle} onClick={() => handleNewNote()}>Write your note</p>
          </>
        )}
      </div>

      <div className={styles.list}>

        {props.notes.length > 0 ? (
          <div className={styles.newNote}>
            <Note
              title='New note...'
              onClick={() => handleNewNote()}
            />
          </div>
        ) : null}

        {props.notes.map((item) => (
          <div key={item.id} className={styles.item}>
            <Note
              id={item.id}
              title={item.title}
              // description={item.content}
              date={moment(item.date).format('GG/MM/YYYY')}
              actions={[
                {
                  src: icons.edit.src,
                  alt: icons.edit.alt,
                  onClick: () => handleEdit(item.id),
                },
                {
                  src: icons.trash.src,
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
