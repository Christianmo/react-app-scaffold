import { combineReducers, createStore, applyMiddleware } from 'redux';

import users from '@redux/users/reducer';
import posts from '@redux/posts/reducer';
import responseMiddleware from 'redux-response-middleware';

const reducers = combineReducers({ users, posts });

export default createStore(reducers, applyMiddleware(responseMiddleware()));
