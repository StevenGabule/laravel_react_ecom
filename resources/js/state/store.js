import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './ducks';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import rootSaga from './middleware/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(reducers);

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(logger, sagaMiddleware)
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
