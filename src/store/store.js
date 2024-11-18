import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import allReducer from 'Store/reducers/index.js';
import allSagas from 'Store/sagas/index.js';

const rootReducer = combineReducers(allReducer);

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    sagaMiddleware
  ]
});

const persistor = persistStore(store)

sagaMiddleware.run(allSagas);

export { store, persistor }