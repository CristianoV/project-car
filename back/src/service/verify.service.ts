import JwtSecret from '../utils/JwtService';
import Account from '../database/models/account';
import { IVerifyService } from '../interface/IService/IVerifyService';
import { IVerifyData } from '../interface/IData/IVerifyData';

export default class VerifyService implements IVerifyService {
  constructor(private model: typeof Account) {}

  public async verifyUserService(
    authorization: string
  ): Promise<IVerifyData | null> {
    const { id: decodedId } = JwtSecret.verify(authorization);

    const verifyUser = await this.model.findOne({
      where: {
        id: decodedId,
      },
      include: [
        {
          all: true,
          attributes: { exclude: ['password', 'id', 'accountId'] },
        },
      ],
    });

    if (!verifyUser) {
      return null;
    }

    const { name } = verifyUser.user;
    return { id: verifyUser.id, level: verifyUser.level, name };
  }
}
