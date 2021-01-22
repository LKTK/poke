import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducer from './reducers';

const makeStore = () => {
    return configureStore({ reducer }, composeWithDevTools())
}

export const storeWrapper = createWrapper(makeStore, { debug: false });
