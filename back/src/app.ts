const express = require('express');
const dotenv = require('dotenv');
import routes from './route';

dotenv.config();

const app = express();
const PORT = process.env.PORT_BACK_END || 3005;

app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
