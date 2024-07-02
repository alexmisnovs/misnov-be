/**
 * `pagesMiddleware` middleware
 */

// generate populate object based on the schema of the app:
const populate = {
  populate: {
    metadata: {
      populate: {
        metaImage: {
          populate: true,
          fields: ["name", "url"],
        },
      },
    },
    blocks: {
      populate: {
        Link: { populate: true },
        Image: {
          fields: ["name", "url"],
        },

        card: {
          populate: {
            image: {
              fields: ["name", "url"],
            },
          },
        },
        Plan: {
          populate: ["services", "link"],
        },
        Form: {
          populate: ["Input", "Button"],
        },
      },
    },
  },
};

import { Strapi } from "@strapi/strapi";

export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In pagesMiddleware populate middleware.");
    ctx.query = { ...populate, ...ctx.query };
    await next();
  };
};
