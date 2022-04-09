import axios from 'axios';
import { ILoginData } from '../interfaces/redux/Login';
const baseUrl = 'http://localhost:12000'

const api = {
    callLogin: (data: ILoginData) => {
        console.log('inside');
        return axios.post(`${baseUrl}/login`, data);
    }
}

export default api;