import { all } from 'redux-saga/effects';
import notes from 'Store/sagas/notes.js';
import detail from 'Store/sagas/detail.js';
// @generator sagas:import

export default function* allSagas() {
  yield all([
    notes(),
    detail(),
    // @generator sagas:export
  ]);
};
