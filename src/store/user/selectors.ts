import { ISeriesState, IStore } from '../../interfaces';
import { StateSelector } from '../util';

export const getSeriesState: StateSelector<ISeriesState> = (state: IStore) => {
    return state.serieReducer;
};
