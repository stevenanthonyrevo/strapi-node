'use strict';

/**
 * Anime.js controller
 *
 * @description: A set of functions called "actions" for managing `Anime`.
 */

module.exports = {

  /**
   * Retrieve anime records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.anime.search(ctx.query);
    } else {
      return strapi.services.anime.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a anime record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.anime.fetch(ctx.params);
  },

  /**
   * Count anime records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.anime.count(ctx.query);
  },

  /**
   * Create a/an anime record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.anime.add(ctx.request.body);
  },

  /**
   * Update a/an anime record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.anime.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an anime record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.anime.remove(ctx.params);
  }
};
