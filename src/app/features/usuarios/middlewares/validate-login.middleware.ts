import { NextFunction, Request, Response } from "express";
import { httpHelper } from "../../../shared/utils";
import { Result } from "../../../shared/utils/result.helper";

export const validateLogin = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { username, password } = request.body;

  if (!username || typeof username !== "string") {
    return httpHelper.badRequestError(
      response,
      Result.error(400, "É necessário informar campo em formato string.")
    );
  }

  if (!password || typeof password !== "string") {
    return httpHelper.badRequestError(
      response,
      Result.error(400, "É necessário informar campo em formato string.")
    );
  }
  next();
};
