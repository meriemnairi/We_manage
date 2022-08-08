import { FETCH_ALL,FETCH , FETCH_BY_NAME, CREATE, UPDATE, DELETE} from '../constants/actionTypes';

const variable = (managers = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH:
      return managers.map((manager) =>
        manager._id === action.payload._id ? action.payload : manager
      );
    case FETCH_BY_NAME:
      return managers.map((manager) =>
        manager.nom === action.payload.nom ? action.payload : manager
      );
    case CREATE:
      return [...managers, action.payload];
    case UPDATE:
      return managers.map((manager) =>
        manager._id === action.payload._id ? action.payload : manager
      );
    case DELETE:
      return managers.filter((manager) => manager._id !== action.payload);
    default:
      return managers;
  }
};

export default variable ; 
