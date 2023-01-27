import { Request, Response, Router } from 'express';

const router = Router();

router.post('/register', (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  res.status(200).json({
    name,
    email,
    password,
  });
});

export default router;
