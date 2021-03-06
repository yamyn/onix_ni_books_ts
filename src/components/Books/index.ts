import { NextFunction, Request, Response } from 'express';
import { IStatModel } from './Interfaces';
import BooksService from './service';

class Books {
    /**
     * @method
     * @param {express.Request} req
     * @param {express.Response} res
     * @param {express.NextFunction} next
     * @returns {Promise < void >}
     */
    public async chart(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<void> {
        try {
            const data: IStatModel[] = await BooksService.getChartData();

            res.status(200).json({ data });
        } catch (error) {
            res.status(500).json({
                message: error.name,
                details: error.message,
            });

            return next(error);
        }
    }
}

export default new Books();
