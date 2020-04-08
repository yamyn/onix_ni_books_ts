import { AggregationCursor } from 'mongodb';

/**
 * @export
 * @interface IStatModel
 */
export interface IStatModel extends AggregationCursor {
    _id: number;
    value: number;
}
