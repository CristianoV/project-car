import { IVerifyData } from '../IData/IVerifyData'

export interface IVerifyService {
  verifyUserService(authorization: string): Promise<IVerifyData | null>;
}
