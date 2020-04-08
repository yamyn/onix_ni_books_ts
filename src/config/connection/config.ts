import config from '../env';
import { IConnectOptions } from '../interfaces';

const connectOptions: IConnectOptions = {
    // flag to allow users to fall back to the old
    // parser if they find a bug in the new parse
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

const MONGO_URI: string = `${config.database.MONGODB_URI}${config.database.MONGODB_DB_MAIN}`;

export default {
    options: connectOptions,
    url: MONGO_URI,
};
