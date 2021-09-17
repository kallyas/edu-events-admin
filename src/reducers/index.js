import { combineReducers } from 'redux';
import eventReducer from './eventReducer';
import usersReducer from './usersReducer';
import projectReducer from './projectReducer';
import uploadImageReducer from './uploadImageReducer';

export default combineReducers({
    events: eventReducer,
    projects: projectReducer,
    users: usersReducer,
    imageUrl: uploadImageReducer
})
