import Router from "express";

const authenticateRoutes = Router();

authenticateRoutes.get("/", (request, response) => {
  const { code } = request.query;

  return response.json(code);
})

export default authenticateRoutes;