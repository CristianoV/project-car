import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_DB,
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;