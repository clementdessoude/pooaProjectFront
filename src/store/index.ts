import { connectRouter } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { history, middleware } from './router';


import { persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { serieReducer, seriesSaga } from '../store/series';
import { userReducer, userSaga } from '../store/user';
import { watchlistReducer, watchlistSaga} from '../store/watchlist';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = connectRouter(history)(
    combineReducers({
        serieReducer,
        userReducer,
        watchlistReducer
    }));

const pReducer = persistReducer(persistConfig, rootReducer);


// REDUX DEV TOOLS EXTENSION ABILITY --- MAYBE REMOVE IN PROD ??
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    pReducer,
    {}, // initial state
    composeEnhancers(applyMiddleware(middleware, sagaMiddleware)));

export const persistor = persistStore(store);

sagaMiddleware.run(seriesSaga);
sagaMiddleware.run(userSaga);
sagaMiddleware.run(watchlistSaga);
