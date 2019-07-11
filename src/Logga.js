'use strict'

const Logger = require('./Logger');

const Logga = {}

defaultConfig = {
    // default configuration comes here..
};

Logga.create = (config) => {
    if(config === undefined) {
        config = this.defaultConfig;
    }
    return new Logger(config);
}

module.exports = Logga;