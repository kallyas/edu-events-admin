import { AddNewProject, getProjects } from '../service/AddProjectService'
import { GET_PROJECTS, ADD_PROJECTS } from './types'

export const fetchProjects = () => dispatch => {
    getProjects().then(projects => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    })
}

export const createProject = project => dispatch => {
    AddNewProject(project).then(() => {
        dispatch({
            type: ADD_PROJECTS,
        })
    })
}