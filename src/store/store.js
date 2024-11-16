import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import allReducer from 'Store/reducers/index.js';
import allSagas from 'Store/sagas/index.js';

const rootReducer = combineReducers(allReducer);

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: rootReducer,
  middleware: [
    sagaMiddleware
  ]
});

sagaMiddleware.run(allSagas);
