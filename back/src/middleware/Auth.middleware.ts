import JwtSecret from '../utils/JwtService';
import Account from '../database/models/account';
import { NextFunction, Request, Response } from 'express';

export default class AuthMiddleware {
  static async authentication(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers as { authorization: string };
    const { id: decodedId } = JwtSecret.verify(authorization);

    const verifyUser = await Account.findOne({
      where: {
        id: decodedId,
      },
    });

    if (!verifyUser) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    next();
  }
}
