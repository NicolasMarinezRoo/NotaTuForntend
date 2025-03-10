
import Nota from "../models/nota"
import { fetchAPI } from "../utils/FetchAPI"
const BASE_URL = import.meta.env.VITE_URL_BASE


export class NotaService {

    static async search(title?: string) {
        let url = BASE_URL+'/nota?'
        if(title) url += 'title='+title

        return await fetchAPI(url)
    } 

    static async getById(id:number) {
        return await fetchAPI(BASE_URL+'/nota/'+id)
    }

    static async create(nota: Partial<Nota>) {
        return await fetchAPI(BASE_URL+'/nota', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nota),
            credentials: 'include'
        })
    }

    static async update(id:number, nota: Partial<Nota>) {
        return await fetchAPI(BASE_URL+'/nota/'+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nota),
            credentials: 'include'
        })
    }
    static async delete(id: number){
        return await fetchAPI(BASE_URL+'/nota/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
    }

}