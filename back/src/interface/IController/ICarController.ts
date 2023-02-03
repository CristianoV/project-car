import { Request, Response } from 'express';

export interface ICarController {
  getCar(req: Request, res: Response): Promise<Response>;
  getCarById(req: Request, res: Response): Promise<Response>;
  createCar(req: Request, res: Response): Promise<Response>;
  updateCar(req: Request, res: Response): Promise<Response>;
  deleteCar(req: Request, res: Response): Promise<Response>;
}
