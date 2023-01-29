import { Request, Response } from "express";
import LoginService from "../service/login.service";

export default class LoginController {
  constructor(private registerService: LoginService) {}

  public async login(req: Request, res: Response) {
    const { name, password } = req.body;

    const user = await this.registerService.login({ name, password });

    return res.status(202).json(user);
  }
}