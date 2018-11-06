import axios from 'axios';
import { BASE_API_URL } from '../../const/api.const';

const fetchStatsRequest = async (userId: string) => {

    const url = BASE_API_URL + `/statistics/all/${userId}`;
    const rep = await axios.get(url);
    return rep;
}


export const Api = {
    fetchStatsRequest,
};