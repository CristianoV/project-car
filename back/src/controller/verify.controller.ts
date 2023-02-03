import { Request, Response } from 'express';
import VerifyService from '../service/verify.service';
import { IVerifyController } from '../interface/IController/IVerifyController';

export default class VerifyController implements IVerifyController {
  constructor(private verifyService: VerifyService) {}

  public async verifyUserController(req: Request, res: Response) {
    const { authorization } = req.headers as { authorization: string };

    const user = await this.verifyService.verifyUserService(authorization);

    return res.status(202).json(user);
  }
}
