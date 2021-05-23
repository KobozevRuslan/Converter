import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {appReducer} from "./reducers/app";

const rootReducer = combineReducers({
  app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger)
);