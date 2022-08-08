import * as api from "../api/index.js";
import {
  AUTH} from "../constants/actionTypes";


export const auth =(formData , history)=> {
    try {
        const { data } = await api.auth(formData);

        dispatch({ type: AUTH , data});

        history.push('/');
    }catch (error){
        console.log(error);
    }
};