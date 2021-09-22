import { combineReducers } from "redux";

import eventsReducer from "./events/eventsSlice";
import usersReducer from "./users/usersSlice";
import projectsReducer from "./projects/projectSlice";
import imageReducer from "./images/imageSlice";

const rootReducer = combineReducers({
    events: eventsReducer,
    users: usersReducer,
    projects: projectsReducer,
    imageUrl: imageReducer,
})

export default rootReducer;