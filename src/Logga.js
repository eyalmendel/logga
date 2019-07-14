'use strict'

const Logger = require('./Logger');
const BaseConfig = require('./config/BaseConfig');
const Levels = require('../src/levels/Levels');

/**
 * private methods
 */

 isEmpty = (object) => {
    return object === undefined ||
        Object.keys(object).length === 0;
}

let defaultConfig = new BaseConfig();

const Logga = {}

/**
 * public methods
 */
Logga.createLogger = (jsonConfig) => {
    if(isEmpty(jsonConfig)) {
        return new Logger(defaultConfig);
    } else {
        const config = new BaseConfig(jsonConfig);
        return new Logger(config);
    }
};

/**
 * Set a custom default configuration
 */
Logga.configure = (json) => {
    defaultConfig = new BaseConfig(json);
};


/**
 * Expose levels class
 */

Logga.levels = Levels;


module.exports = Logga;