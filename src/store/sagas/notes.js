/*
 *
 * Home Saga
 *
 * @author Vittorio Scaperrotta
 * @date 16-Nov-2024
 */


import { all, put, take, call } from 'redux-saga/effects';
import * as actions from 'Store/actions/notes';
// import * as api from 'Api/home/home.js';

// @generator saga
function* confirmSaveSaga() {
	yield put(actions.doConfirmSave(true));
}

// @generator saga:watch
function* watchCompleteSave() {
	while (true) {
		yield take(actions.actionsType.DO_ADD_NOTE);
		yield call(confirmSaveSaga);
	}
}

export default function* rootSaga() {
	yield all([
		watchCompleteSave()
		// @generator saga:fork
	]);
}
