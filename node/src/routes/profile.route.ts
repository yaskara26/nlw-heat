import { Router } from "express";
import { ProfileUserController } from "../controllers/ProfileUserController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const profileRoutes = Router();

profileRoutes.get("/", ensureAuthenticated, new ProfileUserController().handle)

export default profileRoutes;