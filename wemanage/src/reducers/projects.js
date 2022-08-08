import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH, FETCH_BY_NAME } from "../constants/actionTypes";

const variable = (projects = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...projects, action.payload];
    case UPDATE:
      return projects.map((project) =>
        project._id === action.payload._id ? action.payload : project
      );
    case FETCH:
      return projects.map((project) =>
        project._id === action.payload._id ? action.payload : project
      );
    case FETCH_BY_NAME:
      return projects.map((project) =>
        project.nomDuProjet === action.payload.nomDuProjet ? action.payload: project
      );
    case DELETE:
      return projects.filter((project) => project._id !== action.payload);
    default:
      return projects;
  }
};

export default variable;
