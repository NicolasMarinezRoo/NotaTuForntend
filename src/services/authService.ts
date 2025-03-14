
import User from "../models/user2";
import { fetchAPI } from "../utils/FetchAPI";

//const URL_BASE = 'http://localhost:3000/api/';
const URL_BASE = import.meta.env.VITE_URL_BASE
export const loginUser = async (email: string, password: string) => {

    try {
        const response = await fetch(`${URL_BASE}/auth/login`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include'
            }
        )
        if (!response.ok) throw new Error('Error al iniciar sesión')
        
        return await response.json()
    } catch (error) {
        const msg = error instanceof Error ? error.message : 'An error occurred'
        throw new Error(msg)
    }

}
export const registerUser = async (user: Partial<User>)  => { 
    return await fetchAPI(URL_BASE+'/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
        credentials: 'include'
    })
}