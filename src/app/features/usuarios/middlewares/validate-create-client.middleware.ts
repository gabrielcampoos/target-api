import { NextFunction, Request, Response } from "express";
import { Profile } from "../../../shared/enums";
import { httpHelper } from "../../../shared/utils";
import { Result } from "../../../shared/utils/result.helper";

export const validateCreateClient = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { profile } = request.body;

  if (profile !== Profile.CLIENT) {
    return httpHelper.badRequestError(
      response,
      Result.error(400, "Campo de perfil inválido. Somente valores de cliente.")
    );
  }

  return next();
};
