'use strict';

/**
 * exploration service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exploration.exploration');
