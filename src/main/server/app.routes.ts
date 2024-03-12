import { Express } from "express";
import usuariosRoutes from "../../app/features/usuarios/users.routes";

export const makeRoutes = (app: Express) => {
  app.use(usuariosRoutes());
};
