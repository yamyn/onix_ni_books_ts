import * as http from 'http';

import App from './expressApp';
import * as Middleware from '../config/middleware';
import * as Routes from '../config/router';
import * as events from './events';
import { IEvents } from './interfaces';

class Server extends App {
    private _server: http.Server;
    private events: IEvents;
    constructor(events: IEvents) {
        super();
        this.events = events;
    }

    start(port: string | number): void {
        this._server = http.createServer(this._app);
        this._server.listen(port);
        this._server.on('error', (error: Error): void =>
            this.events.onError(error, port),
        );

        this._server.on(
            'listening',
            this.events.onListening.bind(this._server),
        );
    }
}

/**
 * @exports {class Server Instance}
 */
export default new Server(events)
    .toConfigure(Middleware.configure)
    .initRouter(Routes.init);
