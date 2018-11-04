export interface IEpisode {
    id: string;
    name: string;
    airDate: Date;
    description: string;
    imgSrc: string;
    episodeNumber: number;
    isSeen?: boolean;
    rate?: number;
    avgRate?: number;
}