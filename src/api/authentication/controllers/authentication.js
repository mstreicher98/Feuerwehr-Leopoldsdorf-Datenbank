'use strict';

/**
 * authentication controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::authentication.authentication');
