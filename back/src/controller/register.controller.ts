import { Request, Response } from "express";
import UserService from "../service/register.service";

export default class RegisterController {
  constructor(private registerService: UserService) {}

  public async register(req: Request, res: Response) {
    const { name, password } = req.body;

    const user = await this.registerService.registerUser({ name, password });

    return res.status(201).json(user);
  }
}