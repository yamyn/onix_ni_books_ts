import { IStatModel } from './model';
import { Aggregate } from 'mongoose';

/**
 * @export
 * @interface IBooksService
 */
export interface IBooksService {
    /**
     * @returns {Aggregate<AggregationCursor[]}
     * @memberof IIBooksService
     */
    getChartData(): Aggregate<IStatModel[]>;
}
