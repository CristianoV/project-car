import express = require('express');
import 'express-async-errors';
import routes from './route';
import cors = require('cors');
const path = require('path');

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use('/', routes);
    this.app.use('/files', express.static(path.resolve(__dirname, '..', 'upload')));
    this.app.use(
      (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        if (err) {
          return res.status(400).json({ error: err.message });
        }
        next();
      }
    );
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();
