import Car from '../database/models/car';
import { ICarData, carSchema } from '../interface/IData/ICarData';

export default class CarsService {
  constructor(private model: typeof Car) {}

  public async getCars() {
    const cars = await this.model.findAll({
      raw: true,
      order: [
        ['value', 'ASC'],
        ['name', 'ASC'],
    ],
    },);

    return cars;
  }

  public async getCarById(id: number) {
    const car = await this.model.findOne({
      where: {
        id,
      },
      raw: true,
    });

    if (!car) {
      throw new Error('Car not found');
    }

    return car;
  }

  public async createCar(car: ICarData) {
    const parsed = carSchema.safeParse(car);

    if (!parsed.success) {
      const { message } = parsed.error;
      const customMessage = JSON.parse(message);

      throw new Error(customMessage[0].message);
    }

    const createdCar = await this.model.create(car);

    return createdCar;
  }

  public async updateCar(id: number, car: ICarData) {
    const parsed = carSchema.safeParse(car);

    if (!parsed.success) {
      const { message } = parsed.error;
      const customMessage = JSON.parse(message);

      throw new Error(customMessage[0].message);
    }

    const updatedCar = await this.model.update(car, {
      where: {
        id,
      },
    });

    return updatedCar;
  }

  public async deleteCar(id: number) {
    const deletedCar = await this.model.destroy({
      where: {
        id,
      },
    });

    if (!deletedCar) {
      throw new Error('Car not found');
    }

    return deletedCar;
  }
}
