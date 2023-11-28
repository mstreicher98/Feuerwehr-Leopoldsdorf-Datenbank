'use strict';

/**
 * authentication router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::authentication.authentication');
