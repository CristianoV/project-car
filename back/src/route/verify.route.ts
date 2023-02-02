import { Request, Response, Router } from 'express';
import AccountModel from '../database/models/account';
import VerifyService from '../service/verify.service';
import VerifyController from '../controller/verify.controller';

const VerifyRoutes: Router = Router();
const verifyService = new VerifyService(AccountModel);
const verifyController = new VerifyController(verifyService);

VerifyRoutes.get('/verify', (request: Request, response: Response) =>
  verifyController.verifyUserController(request, response)
);

export default VerifyRoutes;
