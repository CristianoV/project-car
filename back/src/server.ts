import { App } from './app';
import 'dotenv/config';

const PORT = process.env.PORT_BACK_END || 3333;

new App().start(PORT);