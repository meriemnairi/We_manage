import axios from "axios";

const url1 = "http://localhost:5000/managers";
const url2 = "http://localhost:5000/projects";
const url3 = "http://localhost:5000/tasks";
const url4 = "http://localhost:5000/admin";

export const fetchManagers = () => axios.get(url1);
export const createManager = (newManager) => axios.post(url1, newManager);
export const updateManager = (id, updatedManager) => axios.patch(`${url1}/${id}`, updatedManager);
export const deleteManager = (id) => axios.delete(`${url1}/${id}`);
export const fetchManager = (id) => axios.get(`${url1}/${id}`);
export const fetchManagerbynom = (id, manager) => axios.get(`${url1}/${id}/${manager.nom}`); 
export const loginManager = (formData) => axios.post(url1, formData);


export const fetchProjects = () => axios.get(url2);
export const fetchProject = (id) => axios.get(`${url2}/${id}`);
export const createProject = (newProject) => axios.post(url2, newProject);
export const updateProject = (id, updatedProject) => axios.patch(`${url2}/${id}`, updatedProject);
export const deleteProject = (id) => axios.delete(`${url2}/${id}`);
export const fetchProjectbynom = (id, project) =>axios.get(`${url2}/${id}/${project.nomDuProjet}`); 

export const fetchTasks = () => axios.get(url3);
export const fetchTask = (id) => axios.get(`${url3}/${id}`);
export const createTask = (newTask) => axios.post(url3, newTask);
export const updateTask = (id, updatedTask) => axios.patch(`${url3}/${id}`, updatedTask);
export const deleteTask = (id) => axios.delete(`${url3}/${id}`);

export const loginAdmin= (formData) => axios.post(url4, formData);
export const createAdmin = (admin) => axios.post(url4, admin);
export const fetchAdmin = (id) => axios.get(`${url4}/${id}`);
export const updateAdmin = (id, updatedAdmin) =>axios.patch(`${url4}/${id}`, updatedAdmin);