import * as api from "../api/index.js";
import {
  CREATE,
  UPDATE,
  FETCH,
  AUTH,
} from "../constants/actionTypes";

export const loginAdmin = async (formData , history, dispatch)=> {
    try {
        const { data } = await api.loginAdmin(formData);

        dispatch({ type: AUTH , data});

        history.push('/');
    }catch (error){
        console.log(error);
    }
};


export const createAdmin = (admin) => async (dispatch) => {
  try {
    const { data } = await api.createAdmin(admin);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAdmin = (id, admin) => async (dispatch) => {
  try {
    const { data } = await api.updateAdmin(id, admin);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const getAdmin = (id, admin) => async (dispatch) => {
  try {
    const { data } = await api.fetchAdmin(id, admin);

    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};