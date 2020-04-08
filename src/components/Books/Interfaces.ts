import { Aggregate } from 'mongoose';
import { AggregationCursor } from 'mongodb';

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

/**
 * @export
 * @interface IStatModel
 */
export interface IStatModel extends AggregationCursor {
    _id: number;
    value: number;
}
