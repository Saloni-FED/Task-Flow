import axios from "axios"
let port = "http://localhost:8080/api/v1"
export const signUp  = (formData)=> axios.post(`${port}/signup`, formData)
export const signIn  = (formData)=> axios.post(`${port}/signin`, formData)
