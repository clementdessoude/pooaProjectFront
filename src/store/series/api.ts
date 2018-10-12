import axios from 'axios';

const fetchSeries = async () => {

    const url = 'http://localhost:8080/api/serie/all';
    // tslint:disable:no-console
    const rep = await axios.get(url);
    console.log('api', rep);
    return rep;
}


export const Api = {
    fetchSeries,
};