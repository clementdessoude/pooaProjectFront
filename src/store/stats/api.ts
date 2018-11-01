import axios from 'axios';
import { BASE_API_URL } from '../../const/api.const';

const fetchStatsRequest = async (userId: string) => {

    const url = BASE_API_URL + '/login';
    // tslint:disable:no-console
    const rep = await axios.get(url);
    console.log('api', rep);
    return rep;
}


export const Api = {
    fetchStatsRequest,
};