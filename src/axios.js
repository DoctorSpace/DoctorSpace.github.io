import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://localhost:4444'
    baseURL: 'http://185.46.8.247:4444'
})

export default instance