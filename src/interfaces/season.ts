import { IEpisode } from './episode';

export interface ISeason {
    name: string;
    number: number;
    id: string;
    imgSrc: string;
    episodes?: IEpisode[];
}