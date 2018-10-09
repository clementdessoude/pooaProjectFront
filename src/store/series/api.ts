import axios from 'axios';

const fetchSeries = async () => {

    const url = 'http://projetgesteco.fr:8000/missions/?format=json';
    // tslint:disable:no-console
    const rep = await axios.get(url);
    console.log('api', rep);
    return rep;
}


export const Api = {
    fetchSeries,
};