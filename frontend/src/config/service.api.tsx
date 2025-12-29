import axios from "axios"

export const apiService = axios.create({
    baseURL: import.meta.env.VITE_Backend_URL || 'http://localhost:3000',
    timeout: 1000 * 10,
});
