export const request = async (method, url, data) => {
    const options = {}
    
    if (data) {
        options.headers = { 'content-type': 'application/json' },
            options.body = JSON.stringify(data)
    }

    const token = localStorage.getItem('accessToken')

    if (token) {
        options.headers = {...options.headers, 'X-Authorization': token}
    }

    const response = await fetch(url,
        {
            method, 
            ...options
        })

    if (response.status === 204) {
        return {}
    }

    const result = await response.json()

    if (!response.ok) {throw result}
    
    return result
}