import {
  FETCH,
  CREATE,
  UPDATE,
} from "../constants/actionTypes";

const variable = (admin = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...admin, action.payload];
    case UPDATE:
      return admin.map((admin) =>
        admin._id === action.payload._id ? action.payload : admin
      );
    case FETCH:
      return admin.map((admin) =>
        admin._id === action.payload._id ? action.payload : admin
      );
    default:
      return admin;
  }
};

export default variable;
