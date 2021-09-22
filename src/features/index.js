import { combineReducers } from "redux";

import eventsReducer from "./events/eventsSlice";
import usersReducer from "./users/usersSlice";
import projectsReducer from "./projects/projectSlice";

const rootReducer = combineReducers({
    events: eventsReducer,
    users: usersReducer,
    projects: projectsReducer,
})

export default rootReducer;