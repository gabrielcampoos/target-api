import { NextFunction, Request, Response } from "express";
import { Profile } from "../../../shared/enums";
import { httpHelper } from "../../../shared/utils";
import { Result } from "../../../shared/utils/result.helper";

export const FilterUser = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { profile } = request.query;

  const profiles = Object.keys(Profile);

  if (profile) {
    if (typeof profile !== "string" || !profiles.includes(profile)) {
      return httpHelper.badRequestError(
        response,
        Result.error(
          400,
          "Informar perfil com valor string. Valores aceitos: " +
            profiles.join(",")
        )
      );
    }
  }
  return next();
};
