import { Router } from "express";
import { authenticate, onlyAdmin } from "../../shared/middlewares";
import {
  FilterUser,
  clearFields,
  validateCreateClient,
  validateCreateUser,
  validateFieldsNewUser,
  validateLogin,
} from "./middlewares";
import { UserController } from "./controller";

export default () => {
  const router = Router();

  router.post(
    "/users",
    [
      authenticate,
      onlyAdmin,
      validateFieldsNewUser,
      clearFields,
      validateCreateUser,
    ],
    UserController.createUser
  );
  router.post(
    "/client",
    [validateFieldsNewUser, clearFields, validateCreateClient],
    UserController.createClient
  );
  router.post("/login", validateLogin, UserController.loginUser);
  router.get(
    "/users",
    [authenticate, onlyAdmin, FilterUser],
    UserController.listAllUsers
  );

  return router;
};
