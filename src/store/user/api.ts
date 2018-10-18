import axios from 'axios';
import { BASE_API_URL } from '../../const/api.const';

const loginRequest = async (login: string, password: string) => {

    const url = BASE_API_URL + '/login';
    // tslint:disable:no-console
    const rep = await axios.post(url, {login, password});
    console.log('api', rep);
    return rep;
}

const registerRequest = async (login: string, password: string, birthdate: string) => {

    const url = BASE_API_URL + '/register';
    // tslint:disable:no-console
    const rep = await axios.post(url, {login, password, birthdate});
    console.log('api', rep);
    return rep;
}


export const Api = {
    loginRequest,
    registerRequest
};