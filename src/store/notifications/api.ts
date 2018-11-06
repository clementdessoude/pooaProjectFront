import axios from 'axios';
import { BASE_API_URL } from '../../const/api.const';

const fetchNotifications = async (userId: string) => {

    const url = BASE_API_URL + `/notification/user-id/${userId}`;
    const rep = await axios.get(url);
    return rep;
}

export const Api = {
    fetchNotifications,
};