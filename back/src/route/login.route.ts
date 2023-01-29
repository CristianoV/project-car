import { Request, Response, Router } from 'express';
import UserModel from '../database/models/user';
import UserService from '../service/login.service';
import LoginController from '../controller/login.controller';

const LoginRoutes: Router = Router();
const loginService = new UserService(UserModel);
const loginController = new LoginController(loginService);

LoginRoutes.post('/login', (request: Request, response: Response) =>
  loginController.login(request, response)
);

export default LoginRoutes;
