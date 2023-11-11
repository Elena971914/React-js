const baseUrl = 'http://localhost:3030/jsonstore/users'

export const getAllUsers = async () => {
    const result = await (await fetch(baseUrl)).json()
    return Object.values(result)
}

export const createUser = async (data) => {
    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        address: {
            country: data.country,
            street: data.street,
            streetNumber: data.streetNumber,
            city: data.city,
        }
    }
    const headers = { method: "POST", body: JSON.stringify(body) }
    const result = await (await fetch(baseUrl, headers)).json()
    return result
}

export const deleteUser = async (id) => {
    try {
        await fetch(`${baseUrl}/${id}`, { method: "DELETE" })
    }
    catch { (err => console.log(err)) }
}

export const getUser = async (id) => {
    try {
        const result = await fetch(`${baseUrl}/${id}`)
        return await result.json()
    }
    catch { (err => console.log(err)) }
}

export const editUser = async ({data, id}) => {
    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imageUrl: data.imageUrl,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        address: {
            country: data.country,
            street: data.street,
            streetNumber: data.streetNumber,
            city: data.city,
        }
    }
    const headers = { method: "PUT", body: JSON.stringify(body) }
    const result = await (await fetch(`${baseUrl}/${id}`, headers)).json()
    return result
}