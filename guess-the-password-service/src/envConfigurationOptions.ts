import dotenv from 'dotenv';

dotenv.config();

export class EnvConfigurationOptions {

  getListenPort(): number {
    return +process.env.LISTEN_PORT || 3000;
  }
}