import { Request, Response } from "express";
import { CreateUserDTO } from "../dtos";
import {
  CreateUserUsecase,
  ListAllUsersUsecase,
  LoginUserUsecase,
} from "../usecases";
import { Result, httpHelper } from "../../../shared/utils";
import { Profile } from "../../../shared/enums";

export class UserController {
  static async createUser(request: Request, response: Response) {
    const user: CreateUserDTO = request.body;

    try {
      const usecase = new CreateUserUsecase();

      const result = await usecase.execute(user);

      if (!result.success) return httpHelper.badRequestError(response, result);

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        response,
        Result.error(500, error.toString())
      );
    }
  }

  static async createClient(request: Request, response: Response) {
    const user: CreateUserDTO = request.body;

    try {
      const usecase = new CreateUserUsecase();

      const result = await usecase.execute(user);

      if (!result.success) return httpHelper.badRequestError(response, result);

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        response,
        Result.error(500, error.toString())
      );
    }
  }

  static async loginUser(request: Request, response: Response) {
    const { username, password }: CreateUserDTO = request.body;

    try {
      const usecase = new LoginUserUsecase();

      const result = await usecase.execute({ username, password });

      if (!result.success) return httpHelper.badRequestError(response, result);

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        response,
        Result.error(500, error.toString())
      );
    }
  }

  static async listAllUsers(request: Request, response: Response) {
    try {
      const { profile } = request.query;

      const usecase = new ListAllUsersUsecase();

      const result = await usecase.execute(profile as keyof typeof Profile);

      return httpHelper.success(response, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        response,
        Result.error(500, error.toString())
      );
    }
  }
}
