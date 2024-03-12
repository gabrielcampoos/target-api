import { NextFunction, Request, Response } from "express";
import { httpHelper } from "../../../shared/utils";
import { Result } from "../../../shared/utils/result.helper";

export const validateFieldsNewUser = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { name, profile, username, password } = request.body;

  if (!name || typeof name !== "string") {
    return httpHelper.badRequestError(
      response,
      Result.error(400, "É necessário nome em formato string")
    );
  }

  if (!profile || typeof profile !== "string") {
    return httpHelper.badRequestError(
      response,
      Result.error(400, "É necessário perfil em formato string")
    );
  }

  if (!username || typeof username !== "string") {
    return httpHelper.badRequestError(
      response,
      Result.error(400, "É necessário username em formato string")
    );
  }

  if (!password || typeof password !== "string") {
    return httpHelper.badRequestError(
      response,
      Result.error(400, "É necessário senha em formato string")
    );
  }

  if (password.length < 6) {
    return httpHelper.badRequestError(
      response,
      Result.error(400, "A senha deve conter pelo menos 6 caracteres.")
    );
  }
  return next();
};
