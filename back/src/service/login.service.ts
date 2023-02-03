import JwtSecret from '../utils/JwtService';
import User from '../database/models/user';
import Bcrypt from '../utils/BcriptService';
import { ILoginData, loginSchema } from '../interface/IData/ILoginData';
import { ILoginService } from '../interface/IService/ILoginService';

export default class LoginService implements ILoginService {
  constructor(private model: typeof User) {}

  public async login({ password, name }: ILoginData) {
    const parsed = loginSchema.safeParse({ name, password });

    if (!parsed.success) {
      const { message } = parsed.error;
      const customMessage = JSON.parse(message);

      throw new Error(customMessage[0].message);
    }

    const user = await this.model.findOne({
      where: {
        name,
      },
      raw: true,
    });

    if (!user) {
      throw new Error('User not found');
    }

    const verifyPassword = Bcrypt.compare(user.password, password);

    if (!verifyPassword) throw new Error('Incorrect email or password');

    const token = JwtSecret.sign({ id: user.id, name: user.name });

    return { token };
  }
}
