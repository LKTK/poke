import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import rootReducer from './reducers';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['user', 'inventory', 'pc', 'pokedex', 'pokemons']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

const makeStore = () => {
    return store
}

export const persistor = persistStore(store)

export const storeWrapper = createWrapper(makeStore, { debug: false });
