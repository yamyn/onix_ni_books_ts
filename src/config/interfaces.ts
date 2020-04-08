import { Connection } from 'mongoose';

export interface IConnectOptions {
    useNewUrlParser?: boolean;
    useCreateIndex?: boolean;
    useUnifiedTopology?: boolean;
}

export interface IDbConnection {
    getConnection(url: string, options: IConnectOptions): Connection;
}

export interface IConfig {
    port: string | number;
    database: {
        MONGODB_URI: string;
        MONGODB_DB_MAIN: string;
    };
}
