import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.PG_PASS,
  password: process.env.PG_USER,
  database: process.env.PG_DB,
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  dialect: 'postgres',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;