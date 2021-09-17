import { GET_PROJECTS, ADD_PROJECT } from "../actions/types";

const initialState = {
    projects: [],
    project: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.projects
            }
        case ADD_PROJECT:
            return {
                ...state,
                project: action.project
            }
        default:
            return state
    }
}