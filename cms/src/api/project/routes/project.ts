import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::project.project", {
  config: {
    "GET /projects/slug/:slug": {
      policies: [],
      middlewares: [],
    },
  },
});
