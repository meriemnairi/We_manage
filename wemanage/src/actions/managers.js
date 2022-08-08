import * as api from "../api/index.js";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH,
  FETCH_BY_NAME,
  AUTH,
  
  
} from "../constants/actionTypes";

export const loginManager = async (formData , history, dispatch)=> {
    try {
        const { data } = await api.loginManager(formData);

        dispatch({ type: AUTH , data});

        history.push('/');
    }catch (error){
        console.log(error);
    }
};

// Action Creators
export const getManagers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchManagers();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const createManager = (manager) => async (dispatch) => {
  try {
    const { data } = await api.createManager(manager);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateManager = (id, manager) => async (dispatch) => {
  try {
    const { data } = await api.updateManager(id, manager);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteManager = (id) => async (dispatch) => {
  try {
    await api.deleteManager(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }

 
};


export const getManager = (id, manager) => async (dispatch) => {
  try {
    const { data } = await api.fetchManager(id, manager);

    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getManagerByNom = (id, manager) => async (dispatch) => {
  try {
    const { data } = await api.fetchManagerbynom(id, manager.nom);

    dispatch({ type: FETCH_BY_NAME, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


