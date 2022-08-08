import * as api from "../api/index.js";
import { FETCH_ALL, CREATE, UPDATE, DELETE , FETCH, FETCH_BY_NAME} from "../constants/actionTypes";

// Action Creators
export const getProjects = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProjects();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const createProject = (project) => async (dispatch) => {
  try {
    const { data } = await api.createProject(project);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getProject = (id, project) => async (dispatch) => {
  try {
    const { data } = await api.fetchProject(id, project);

    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const getProjectByNom = (id, project) => async (dispatch) => {
  try {
    const { data } = await api.fetchProjectbynom(id, project.nomDuProjet);

    dispatch({ type: FETCH_BY_NAME, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const updateProject = (id, project) => async (dispatch) => {
  try {
    const { data } = await api.updateProject(id, project);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await api.deleteProject(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
