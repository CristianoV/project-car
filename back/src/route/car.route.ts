import { Request, Response, Router } from 'express';
import CarModel from '../database/models/car';
import CarService from '../service/cars.service';
import CarController from '../controller/car.controller';
import FileMiddleware from '../middleware/File.middleware';
import AuthMiddleware from '../middleware/Auth.middleware';
import upload from '../utils/picture';

const CarRoutes: Router = Router();
const carService = new CarService(CarModel);
const carController = new CarController(carService);

CarRoutes.get('/cars', (request: Request, response: Response) =>
  carController.getCar(request, response)
);

CarRoutes.get('/cars/:id', (request: Request, response: Response) =>
  carController.getCarById(request, response)
);

CarRoutes.post(
  '/cars',
  AuthMiddleware.authentication,
  upload.single('file'),
  (request: Request, response: Response) =>
    carController.createCar(request, response)
);

CarRoutes.put(
  '/cars/:id',
  AuthMiddleware.authentication,
  upload.single('file'),
  FileMiddleware.deleteUpdateFile,
  (request: Request, response: Response) =>
    carController.updateCar(request, response)
);

CarRoutes.delete(
  '/cars/:id',
  AuthMiddleware.authentication,
  FileMiddleware.deleteFile,
  (request: Request, response: Response) =>
    carController.deleteCar(request, response)
);

export default CarRoutes;
