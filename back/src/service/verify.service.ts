import JwtSecret from '../utils/JwtService';
import Account from '../database/models/account';

export default class VerifyService {
  constructor(private model: typeof Account) {}

  public async verifyUserService(authorization: string): Promise<any> {
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
    return { id: verifyUser.id, nivel: verifyUser.nivel, name };
  }
}
