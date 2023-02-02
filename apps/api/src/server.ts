import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { type Express } from 'express';
import logger from 'logger';
import pino from 'pino-http';
import routes from './routes';

const createServer: () => Express = () => {
  const app = express();
  app
    .disable('x-powered-by')
    .use(express.json())
    .use(
      cors({
        origin: ['http://localhost:3000'],
      })
    )
    .use(cookieParser())
    .use(
      pino({
        logger,
        // Define a custom logger level
        customLogLevel(req, res, err) {
          if (res.statusCode >= 400 && res.statusCode < 500) {
            return 'warn';
          }
          if (res.statusCode >= 500 || err) {
            return 'error';
          }
          if (res.statusCode >= 300 && res.statusCode < 400) {
            return 'silent';
          }
          return 'info';
        },
        // Define a custom success message
        customSuccessMessage(req, res) {
          if (res.statusCode === 404) {
            return 'resource not found';
          }
          return `${req.method} completed`;
        },
        // Define a custom receive message
        customReceivedMessage(req, res) {
          return `request received: ${req.method}`;
        },
        // Define a custom error message
        customErrorMessage(req, res, err) {
          return `request errored with status code: ${res.statusCode}`;
        },
      })
    )
    // Routes
    .use('/api/v1/', routes);

  return app;
};

export default createServer;
