import { Request, Response } from 'express';
import LoginService from '../service/login.service';
import { ILoginController } from '../interface/IController/ILoginController';

export default class LoginController implements ILoginController {
  constructor(private registerService: LoginService) {}

  public async login(req: Request, res: Response) {
    const { name, password } = req.body;

    const user = await this.registerService.login({ name, password });

    return res.status(202).json(user);
  }
}
