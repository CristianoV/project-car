import Account from '../database/models/account';
import User from '../database/models/user';
import Bcrypt from '../utils/BcriptService';
import JwtSecret from '../utils/JwtService';
import { RegisterData, RegisterSchema } from '../interface/IData/IRegisterData';
import { IRegisterService } from '../interface/IService/IRegisterService';

export default class RegisterService implements IRegisterService {
  constructor(private model: typeof User) {}

  public async registerAccount({
    level,
  }: {
    level: 'user' | 'admin';
  }): Promise<Account> {
    const newAccount = await Account.create({
      level,
    });

    return newAccount;
  }

  public async registerUser({ name, password }: RegisterData) {
    const parsed = RegisterSchema.safeParse({ name, password });

    if (!parsed.success) {
      const { message } = parsed.error;
      const customMessage = JSON.parse(message);

      throw new Error(customMessage[0].message);
    }

    const existingUser = await this.model.findOne({ where: { name } });
    if (existingUser) {
      throw new Error('Username already exists.');
    }

    const { id: accountId } = await this.registerAccount('user' as any);

    const encrypt = Bcrypt.encrypt(password);

    const user = await this.model.create({
      name,
      password: encrypt,
      accountId,
    });
    const token = JwtSecret.sign({ id: user.id, name: user.name });

    return { token };
  }
}
