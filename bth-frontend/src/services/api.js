import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
console.log('rota',process.env.REACT_APP_BASE_URL)
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

export default api;