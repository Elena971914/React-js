import { request } from "../lib/request";

const BASE_URL = "http://localhost:3030/data/comments"

export const create = async( gameId, text) => {
    const response = await request("POST", BASE_URL, {gameId, text})
    return response
}

export const getAll = async(gameId) => {
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`,
        load:`owner=_ownerId:users`
    })
    const response = await request("GET", `${BASE_URL}?${query}`)
    return response
}