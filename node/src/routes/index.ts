import Router from "express";

import githubRoutes from "./github.routes";
import authenticateRoutes from "./authenticate.routes";
import messageRoutes from "./message.routes";
import profileRoutes from "./profile.route";

const routes = Router();

routes.use("/github", githubRoutes);
routes.use("/authenticate", authenticateRoutes);
routes.use("/messages", messageRoutes);
routes.use("/profile", profileRoutes);

export default routes;
