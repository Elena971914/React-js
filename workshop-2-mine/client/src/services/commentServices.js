import { request } from "../lib/request";

const BASE_URL = "http://localhost:3030/jsonstore/comments"

export const create = async(username, text, gameId) => {
    const response = await request("POST", BASE_URL, {username, text, gameId})
    console.log(response)
    return response
}

export const getAll = async() => {
    const response = await request("GET", BASE_URL)
    return Object.values(response)
}