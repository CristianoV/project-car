import { Request, Response, Router } from 'express';
import CarModel from '../database/models/car';
import CarService from '../service/cars.service';
import CarController from '../controller/car.controller';

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

CarRoutes.post('/cars', upload.single('file'), (request: Request, response: Response) =>
  carController.createCar(request, response)
);

CarRoutes.put('/cars/:id', (request: Request, response: Response) =>
  carController.updateCar(request, response)
);

CarRoutes.delete('/cars/:id', (request: Request, response: Response) =>
  carController.deleteCar(request, response)
);

export default CarRoutes;
