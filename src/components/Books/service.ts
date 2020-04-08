import BooksModel from './model';
import { IStatModel } from './Interfaces';
import { Aggregate } from 'mongoose';
import { Service } from './serviceComponent';

class BooksService implements Service {
    /**
     * @method getChartData
     * @summary give group array books for countries
     * @returns {Aggregate<AggregationCursor[]>}
     * @memberof BooksService
     */
    public getChartData(): Aggregate<IStatModel[]> {
        return BooksModel.aggregate([
            {
                $project: {
                    code3: 1,
                    count: { $add: [1] },
                },
            },
            {
                $group: {
                    _id: '$code3',
                    value: { $sum: '$count' },
                },
            },
        ]);
    }
}

export default new BooksService();
