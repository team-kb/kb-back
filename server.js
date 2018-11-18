import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import logger from './config/logger';
import routes from './config/routes';

const server = express();
const port = process.env.PORT || 3000;
const morganFormat = process.env.MORGAN_FORMAT || 'short';

server.use(morgan(morganFormat, { stream: logger.stream }));
server.use(helmet());
server.use('/', routes);

server.listen(port, () => {
  logger.info(`K&B Backend en puerto ${port}`);
});
