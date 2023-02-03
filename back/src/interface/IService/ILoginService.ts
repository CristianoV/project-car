import { IToken } from '../IToken';
import { IError } from '../IError';
import { ILoginData } from '../IData/ILoginData';

export interface ILoginService {
  login({ password, name }: ILoginData): Promise<IToken | IError>;
}
