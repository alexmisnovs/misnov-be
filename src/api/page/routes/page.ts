/**
 * page router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::page.page", {
  config: {
    find: {
      middlewares: ["api::page.pages-middleware"],
    },
    findOne: {
      middlewares: ["api::page.pages-middleware"],
    },
  },
});
