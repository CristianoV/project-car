import { Request, Response, Router } from 'express';
import UserModel from '../database/models/user';
import UserService from '../service/register.service';
import RegisterController from '../controller/register.controller';

const RegisterRoutes: Router = Router();
const registerService = new UserService(UserModel);
const registerController = new RegisterController(registerService);

RegisterRoutes.post('/register', (request: Request, response: Response) =>
  registerController.register(request, response)
);

export default RegisterRoutes;
