import * as mongoose from 'mongoose';

import { IDbConnection } from '../interfaces';
import config from './config';

class MongodbConnection implements IDbConnection {
    public getConnection(url: string, options: object): mongoose.Connection {
        return mongoose.createConnection(url, options);
    }
}

export const db: mongoose.Connection = new MongodbConnection().getConnection(
    config.url,
    config.options,
);
