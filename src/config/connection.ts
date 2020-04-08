import * as mongoose from 'mongoose';
import config from './env';

interface IConnectOptions {
    useNewUrlParser?: boolean;
    useCreateIndex?: boolean;
    useUnifiedTopology?: boolean;
}

const MONGO_URI: string = `${config.database.MONGODB_URI}${config.database.MONGODB_DB_MAIN}`;

const connectOptions: IConnectOptions = {
    // flag to allow users to fall back to the old
    // parser if they find a bug in the new parse
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

export const db: mongoose.Connection = mongoose.createConnection(
    MONGO_URI,
    connectOptions,
);
