import { all } from 'redux-saga/effects';
import notes from 'Store/sagas/notes.js';
// @generator sagas:import

export default function* allSagas() {
  yield all([
    notes()
    // @generator sagas:export
  ]);
};
