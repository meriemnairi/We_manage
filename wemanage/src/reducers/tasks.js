import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH } from "../constants/actionTypes";

const variable = (tasks = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...tasks, action.payload];
    case UPDATE:
      return tasks.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );
    case FETCH:
      return tasks.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );
    case DELETE:
      return tasks.filter((task) => task._id !== action.payload);
    default:
      return tasks;
  }
};

export default variable;
