import { Request, Response } from 'express';

const register = (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  res.status(200).json({
    email,
    password,
    name,
  });
}

export default register;