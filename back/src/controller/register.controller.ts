import { Request, Response } from 'express';
import UserService from '../service/register.service';
import { IRegisterController } from '../interface/IController/IRegisterController';

export default class RegisterController implements IRegisterController {
  constructor(private registerService: UserService) {}

  public async register(req: Request, res: Response) {
    const { name, password } = req.body;

    const user = await this.registerService.registerUser({ name, password });

    return res.status(201).json(user);
  }
}
