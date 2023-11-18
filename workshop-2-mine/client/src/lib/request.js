export const request = async (method, url, data) => {
    const options = {}
    
    if (data) {
        options.headers = { 'content-type': 'application/json' },
            options.body = JSON.stringify(data)
    }

    const response = await fetch(url,
        {
            method, 
            ...options
        })

    const result = await response.json()
    return result
}