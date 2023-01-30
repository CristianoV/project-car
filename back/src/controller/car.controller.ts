import { Request, Response } from 'express';
import CarService from '../service/cars.service';

export default class CarController {
  constructor(private carService: CarService) {}

  public async getCar(req: Request, res: Response) {
    const user = await this.carService.getCars();

    return res.status(202).json(user);
  }

  public async getCarById(req: Request, res: Response) {
    const { id } = req.params;

    const car = await this.carService.getCarById(Number(id));

    return res.status(202).json(car);
  }

  public async createCar(req: Request, res: Response) {
    const { name, marca, value, modelo } = req.body;

    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'Please, send a file' });
    }

    const car = await this.carService.createCar({
      name,
      marca,
      value,
      modelo,
      foto: file.path,
    });

    return res.status(202).json(car);
  }

  public async updateCar(req: Request, res: Response) {
    const { id } = req.params;
    const { name, marca, value, modelo, foto } = req.body;

    const car = await this.carService.updateCar(Number(id), {
      name,
      marca,
      value,
      modelo,
      foto,
    });

    return res.status(202).json(car);
  }

  public async deleteCar(req: Request, res: Response) {
    const { id } = req.params;

    const car = await this.carService.deleteCar(Number(id));

    return res.status(202).json(car);
  }
}
// {
//   "name": "Sandero",
//   "marca": "Chevrollet",
//   "value": 8000,
//   "modelo": "sr",
//   "foto": "asdasdasdasd.png"
// }
