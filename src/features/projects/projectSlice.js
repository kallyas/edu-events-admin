import { createSlice } from "@reduxjs/toolkit";
import { AddNewProject, getProjects } from "../../service/AddProjectService";

const initialState = {
  projects: [],
  loading: false,
  hasErrors: false,
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetchProjects: (state) => {
      state.loading = true;
    },
    fetchProjectsSuccess: (state, { payload }) => {
      state.projects = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    fetchProjectsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { fetchProjects, fetchProjectsSuccess, fetchProjectsFailure } = projectSlice.actions;

export const projectsSelector = (state) => state?.projects;

export default projectSlice.reducer;

export const fetchProjectsAsync = () => {
  return async (dispatch) => {
    getProjects()
      .then((projects) => {
        dispatch(fetchProjectsSuccess(projects));
      })
      .catch((error) => {
        dispatch(fetchProjectsFailure(error));
      });
  };
};

export const createProjectAsync = (project) => {
  return async (dispatch) => {
    AddNewProject(project)
      .then(() => {
        dispatch(fetchProjectsAsync());
      })
      .catch((error) => {
        dispatch(fetchProjectsFailure(error));
      });
  };
};
