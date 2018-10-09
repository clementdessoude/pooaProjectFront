import { connectRouter } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { history, middleware } from './router';

import { serieReducer, seriesSaga } from '../store/series';

const sagaMiddleware = createSagaMiddleware();

// REDUX DEV TOOLS EXTENSION ABILITY --- MAYBE REMOVE IN PROD ??
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    connectRouter(history)(
        combineReducers({
            serieReducer
        })),
    {}, // initial state
    composeEnhancers(applyMiddleware(middleware, sagaMiddleware)));

sagaMiddleware.run(seriesSaga);
