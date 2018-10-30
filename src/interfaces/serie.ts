import { IGenre } from './genre';

export interface ISerie {
    id: string;
    title: string;
    imgSrc: string;
    description: string;
    genres: IGenre[];
}