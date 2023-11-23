import { request } from "../lib/request"

const BASE_URL = "http://localhost:3030/users"

//these functions are called from the submit handler, which passes the data
export const login = async (email, password) => {
    const response = await request("POST", `${BASE_URL}/login`, {email, password})
    
    return response
}

export const register = async (email,password) =>  {
    const response = await request("POST", `${BASE_URL}/register`, {email, password})
    return response
}

export const logout = async () => {
    const response = await request("GET", `${BASE_URL}/logout`)
}