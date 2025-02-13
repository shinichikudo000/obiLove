import axios from 'axios'

export const API = axios.create({
    baseURL: '',
    headers: {
        'Content-type': 'application/json',
        'access-token': localStorage.getItem('access-token') || '',
        'uid': localStorage.getItem('uid') || '',
        'expiry': localStorage.getItem('expiry') || '',
        'client': localStorage.getItem('client') || ''
    }
})