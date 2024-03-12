import { NextFunction, Request, Response } from "express";
import { Profile } from "../enums";
import { httpHelper } from "../utils";
import { Result } from "../utils/result.helper";

export const onlyClient = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const profile = request.user.profile;

  if (profile !== Profile.CLIENT)
    return httpHelper.badRequestError(
      response,
      Result.error(401, "Usuário não é um cliente.")
    );

  return next();
};
