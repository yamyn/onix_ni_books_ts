import { Aggregate } from 'mongoose';
import { IStatModel } from './Interfaces';

export abstract class Service {
    /**
     * @method getChartData
     * @summary give group array books for countries
     * @returns {Aggregate<AggregationCursor[]>}
     * @memberof BooksService
     */
    public abstract getChartData(): Aggregate<IStatModel[]>;
}
