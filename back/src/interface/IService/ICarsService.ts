import { IToken } from '../IToken';
import { IError } from '../IError';
import { ILoginData } from '../IData/ILoginData';

export interface ICarsService {
  getCars({ password, name }: ILoginData): Promise<IToken | IError>;
  getCarById({ password, name }: ILoginData): Promise<IToken | IError>;
  createCar({ password, name }: ILoginData): Promise<IToken | IError>;
  updateCar({ password, name }: ILoginData): Promise<IToken | IError>;
  deleteCar({ password, name }: ILoginData): Promise<IToken | IError>;
}
