import Account from '../database/models/account';
import User from '../database/models/user';
import Bcrypt from '../utils/BcriptService';
import JwtSecret from '../utils/JwtService';

import { RegisterData, RegisterSchema } from '../interface/IData/IRegisterData';

export default class RegisterService {
  constructor(private model: typeof User) {}

  public async registerAccount(nivel: string) {
    const newAccount = await Account.create(
      {
        nivel,
      },
      {
        raw: true,
      }
    );

    return newAccount;
  }

  public async registerUser({ name, password }: RegisterData) {
    const parsed = RegisterSchema.safeParse({ name, password });

    if (!parsed.success) {
      const { message } = parsed.error;
      const customMessage = JSON.parse(message);

      throw new Error(customMessage[0].message);
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
