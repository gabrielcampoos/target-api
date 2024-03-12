import { NextFunction, Request, Response } from "express";
import { Profile } from "../../../shared/enums";
import { httpHelper } from "../../../shared/utils";
import { Result } from "../../../shared/utils/result.helper";

export const validateCreateUser = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { profile, companyName } = request.body;

  if (profile !== Profile.ADMIN) {
    return httpHelper.badRequestError(
      response,
      Result.error(
        400,
        'Campo de perfil inválido. Somente valores de "administrador".'
      )
    );
  }

  if (
    profile === Profile.ADMIN &&
    (!companyName || typeof companyName !== "string")
  ) {
    return httpHelper.badRequestError(
      response,
      Result.error(
        400,
        "É necessário informar o nome da empresa para criar um cliente."
      )
    );
  }

  return next();
};
