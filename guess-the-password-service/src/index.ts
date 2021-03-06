import express, { Router, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import winston from "winston";
import { EnvConfigurationOptions } from './envConfigurationOptions';
import { configureControllers }from './controllerConfiguration';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ]
});

const app = express();
const router = Router();
const configurationOptions = new EnvConfigurationOptions();
const controllers = configureControllers();

controllers.forEach(controller => controller.addRoutes(router));

app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.use((err: Error, req: Request, res: Response) => {
  logger.error('An internal server error occurred', err.stack);
  res.status(500).send("Internal server error");
});

app.listen(configurationOptions.getListenPort(), () => {
  logger.info(`server started at http://localhost:${ configurationOptions.getListenPort() }`);
});