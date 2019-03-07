import { combineReducers, createStore, applyMiddleware } from 'redux';

import usersReducer from '@redux/users/reducer';
import postsReducer from '@redux/posts/reducer';
import responseMiddleware from 'redux-response-middleware';

const reducers = combineReducers({ usersReducer, postsReducer });

export default createStore(reducers, applyMiddleware(responseMiddleware()));
