import { combineReducers } from 'redux'

import user from './user'
import rest from './rest'
import favorites from './favorites'

export default combineReducers({ user, rest, favorites })