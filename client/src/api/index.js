import axios from "axios"
let port = "http://localhost:8080/api/v1"
export const signIn  = (formData)=> axios.post(`${port}/users`, formData)
export const signUp  = (formData)=> axios.post(`${port}/users`, formData)