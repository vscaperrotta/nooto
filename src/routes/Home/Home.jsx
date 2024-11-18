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
import PageTemplate from 'Components/PageTemplate';
import Note from 'Components/Note';
import * as actions from 'Store/actions/notes.js';
import styles from './Home.module.scss';


const Home = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from API or local storage
    // dispatch(actions.doFetchNotes())
    // console.log('Fetching data from redux state storage')
  }, [])

  function handleNewNote(id) {
    navigate({ pathname: '/note' })
  }

  function handleEdit(id) {
    console.log(`Edit ${id}`);
  }

  function handleDelete(id) {
    dispatch(actions.doDeleteNote(id))
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
                  label: 'E',
                  onClick: () => handleEdit(item.id),
                },
                {
                  label: 'D',
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
