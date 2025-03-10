import { fetchAPI } from "../utils/FetchAPI";
const URL_BASE = 'http://localhost:3000/api/';

export class UserService {
    static async getAll() {
      return await fetchAPI(URL_BASE + "users/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
    }
    static async getProfile() {
      return await fetchAPI(URL_BASE + "users/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
  
    }
  }