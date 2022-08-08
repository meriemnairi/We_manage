import { combineReducers } from "redux";

import managers from "./managers";
import projects from "./projects";
import tasks from "./tasks";
import admin from "./admin";

export default combineReducers({ managers, projects, tasks, admin});

