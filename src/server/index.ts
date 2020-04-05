import server from './server';
import config from '../config/env';

server.start(config.port || 3000);
