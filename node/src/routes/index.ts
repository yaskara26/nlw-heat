import Router from "express";

import githubRoutes from "./github.routes";
import authenticateRoutes from "./authenticate.routes";

const routes = Router();

routes.use("/github", githubRoutes);
routes.use("/authenticate", authenticateRoutes);

export default routes;
