import fs = require('fs');
import { Request, Response, NextFunction } from 'express';
import Car from '../database/models/car';

class FileMiddleware {
  static async deleteFile(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const car = await Car.findOne({
      where: {
        id,
      },
    });

    if (!car) {
      throw new Error('Car not found');
    }
    let parts = car.foto.split('files/');
    let result = parts.slice(-1)[0];
    fs.unlink(`upload/${result}`, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });

    next();
  }
}

export default FileMiddleware;
