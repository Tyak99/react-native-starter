import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // Blacklist state that we do not need/want to persist
    blacklist: [],
    // whitelist state that we want to persist
    whitelist: [
        // auth
        'user'
    ]

}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

export {
    store,
    persistor,
  };
