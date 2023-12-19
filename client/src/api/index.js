import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:8080/api/v1" });

// Authorization
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    const token = JSON.parse(localStorage.getItem("profile"));
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});
// Authentication
export const signUp = (formData) => API.post(`/signup`, formData);
export const signIn = (formData) => API.post(`/signin`, formData);

// tasks from user
export const createTask = (taskData) => API.post(`/createTask`, taskData);

// Get Task 
export const getAllTaskOfUser = ()=> API.get('/getalltask')
