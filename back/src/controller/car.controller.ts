import { Request, Response } from 'express';
import CarService from '../service/cars.service';
import { ICarController } from '../interface/IController/ICarController';

export default class CarController  implements ICarController{
  constructor(private carService: CarService) {}

  public async getCar(req: Request, res: Response) {
    const user = await this.carService.getCars();

    return res.status(200).json(user);
  }

  public async getCarById(req: Request, res: Response) {
    const { id } = req.params;

    const car = await this.carService.getCarById(Number(id));

    return res.status(200).json(car);
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
      foto: process.env.DB_URL + file.filename,
    });

    return res.status(201).json(car);
  }

  public async updateCar(req: Request, res: Response) {
    const { id } = req.params;

    const file = req.file;
    const { name, marca, value, modelo } = req.body;

    if (file) {
      const car = await this.carService.updateCar(Number(id), {
        name,
        marca,
        value,
        modelo,
        foto: process.env.DB_URL + file.filename,
      });
    }
    const car = await this.carService.updateCar(Number(id), {
      name,
      marca,
      value,
      modelo,
    });
    return res.status(202).json(car);
  }

  public async deleteCar(req: Request, res: Response) {
    const { id } = req.params;

    const car = await this.carService.deleteCar(Number(id));

    return res.status(202).json(car);
  }
}
