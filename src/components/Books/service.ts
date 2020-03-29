import BooksModel, { IStatModel } from './model';
import { IBooksService } from './Interface';
import { Aggregate } from 'mongoose';

/**
 * @export
 * @implements {IBooksService}
 */

const BooksService: IBooksService = {
    /**
     * @method getChartData
     * @summary give group array books for countries
     * @returns {Aggregate<AggregationCursor[]>}
     * @memberof BooksService
     */
    getChartData(): Aggregate<IStatModel[]> {
        return BooksModel.aggregate([]);
    },
};

export default BooksService;
