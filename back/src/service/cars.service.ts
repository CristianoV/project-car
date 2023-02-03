import Car from '../database/models/car';
import { ICarData, carSchema } from '../interface/IData/ICarData';
import { ICarsService } from '../interface/IService/ICarsService';

export default class CarsService implements ICarsService{
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

    await this.model.create(car);
  }

  public async updateCar(id: number, car: ICarData) {
    const parsed = carSchema.safeParse(car);

    if (!parsed.success) {
      const { message } = parsed.error;
      const customMessage = JSON.parse(message);

      throw new Error(customMessage[0].message);
    }

    await this.model.update(car, {
      where: {
        id,
      },
    });
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
  }
}
