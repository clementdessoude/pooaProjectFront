import axios from 'axios';
import { BASE_API_URL } from '../../const/api.const';

const loginRequest = async (login: string, password: string) => {

    const url = BASE_API_URL + '/login';
    const rep = await axios.post(url, {login, password});
    return rep;
}

const registerRequest = async (login: string, password: string, birthdate: string) => {

    const url = BASE_API_URL + '/register';
    const rep = await axios.post(url, {login, password, birthdate});
    return rep;
}


export const Api = {
    loginRequest,
    registerRequest
};