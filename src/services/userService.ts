
const URL_BASE = 'http://localhost:3000/api/';
export const getUsers = async () => {
    try {
        const response = await fetch(URL_BASE+'users/',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        if (!response.ok) throw new Error('Error al obtener los usuarios')
        return await response.json()
    } catch (error) {
        const msg = error instanceof Error ? error.message : 'An error occurred'
        throw new Error(msg)
    }
}