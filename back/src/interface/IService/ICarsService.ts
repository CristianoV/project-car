import Car from '../../database/models/car';
import { ICarData } from '../IData/ICarData';

export interface ICarsService {
  getCars(): Promise<Car[]>;
  getCarById(id: number): Promise<Car>;
  createCar(car: ICarData): Promise<void>;
  updateCar(id: number, car: ICarData): Promise<void>;
  deleteCar(id: number): Promise<void>;
}
