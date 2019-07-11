'use strict'

const Logger = require('./Logger');
const BaseConfig = require('./config/BaseConfig');
const Console = require('../src/storage/Console');
const File = require('../src/storage/File');
const Levels = require('../src/levels/Levels');

let defaultConfig = new BaseConfig();

const Logga = {}

Logga.create = (config) => {
    if(config === undefined) {
        config = defaultConfig;
    }
    return new Logger(config);
};

Logga.configure = (json) => {
    defaultConfig = new BaseConfig(json);
};

Logga.storage.Console = Console;
Logga.storage.File = File;
Logga.levels = Levels;

module.exports = Logga;