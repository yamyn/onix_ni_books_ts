import * as express from 'express';
import { Configure } from '../config/middleware';
import * as Routes from '../config/router';

class App {
    readonly _server: express.Application = express();

    constructor(port: string, configure: Configure, routes: any) {
        this._server.set('port', port || 3000);
        new Configure(this._server);
        routes.init(this._server);
    }

    get server(): express.Application {
        return this._server;
    }
}

/**
 * @exports {express.Application}
 */
export default new App(process.env.PORT, Configure, Routes).server;
