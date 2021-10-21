import { Router } from "express";

import { CreateMessageController } from "../controllers/CreateMessageController"
import { GetLast3MessagesController } from "../controllers/GetLast3MessagesController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const messageRoutes = Router();

messageRoutes.post(
  "/",
  ensureAuthenticated,
  new CreateMessageController().handle
);

messageRoutes.get("/last3", new GetLast3MessagesController().handle);

export default messageRoutes;