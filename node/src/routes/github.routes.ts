import Router from "express";

const githubRoutes = Router();

githubRoutes.get("/", (request, response) => {
  console.log(`github`)
  return response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

export default githubRoutes;