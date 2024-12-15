import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage'
import allReducer from 'Store/reducers/index.js';
import allSagas from 'Store/sagas/index.js';

const rootReducer = combineReducers(allReducer);

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  transforms: [
    encryptTransform({
      secretKey: 'a3219d4e2772db6e34c62144b27f5bbe61fe6db548e665a49663eba2d74ae61790a9937e3f6d5d3ddc83',
      onError: function (error) {
        console.log();
      },
    }),
  ],
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