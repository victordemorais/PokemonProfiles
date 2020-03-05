import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import combinedReducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(combinedReducers, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
