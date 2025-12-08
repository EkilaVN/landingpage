/**
 * project controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::project.project",
    ({ strapi }) => ({
        async findOne(ctx) {
            const { id } = ctx.params;
            const query = ctx.query || {};

            // Check if the parameter is a number (ID) or string (slug)
            const isNumericId = !isNaN(Number(id));

            let entity;

            if (isNumericId) {
                // Use default behavior for numeric IDs
                entity = await strapi.entityService.findOne(
                    "api::project.project",
                    id,
                    {
                        ...query,
                        populate: query.populate || [
                            "thumbnail",
                            "project_type",
                        ],
                    }
                );
            } else {
                // Query by slug for non-numeric parameters
                const entities = await strapi.entityService.findMany(
                    "api::project.project",
                    {
                        filters: { slug: id },
                        ...query,
                        populate: query.populate || [
                            "thumbnail",
                            "project_type",
                        ],
                    }
                );

                entity = entities.length > 0 ? entities[0] : null;
            }

            if (!entity) {
                return ctx.notFound("Project not found");
            }

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return this.transformResponse(sanitizedEntity);
        },

        async findOneBySlug(ctx) {
            const { slug } = ctx.params;
						console.log("Finding project by slug:", slug);
            const query = ctx.query || {};

            const entities = await strapi.entityService.findMany(
                "api::project.project",
                {
                    filters: { slug },
                    ...query,
                    populate: query.populate || ["thumbnail", "project_type"],
                }
            );

            const entity = entities.length > 0 ? entities[0] : null;

            if (!entity) {
                return ctx.notFound("Project not found");
            }

            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return this.transformResponse(sanitizedEntity);
        },
    })
);
