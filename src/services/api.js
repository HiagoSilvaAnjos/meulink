import axios from 'axios';

export const key = "ed343a6ee0849ec4dbca7a92dc4945a364dae70a"


const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;  