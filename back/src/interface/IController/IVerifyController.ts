import { Request, Response } from 'express';

export interface IVerifyController {
  verifyUserController(req: Request, res: Response): Promise<Response>;
}
