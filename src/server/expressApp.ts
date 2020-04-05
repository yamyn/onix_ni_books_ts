import * as express from 'express';

class App {
    start(PORT: string | number): void {
        throw new Error('Method not implemented.');
    }
    readonly _app: express.Application = express();

    toConfigure(configure: (app: express.Application) => void): App {
        configure(this._app);

        return this;
    }

    initRouter(initRoutes: (app: express.Application) => void): App {
        initRoutes(this._app);

        return this;
    }

    get server(): express.Application {
        return this._app;
    }
}

/**
 * @exports {class App}
 */

export default App;
