'use strict'

import { BaseConfig } from './config/BaseConfig';


export class Logger {

    config: BaseConfig;

    constructor(config: BaseConfig) {
        this.config = config;
    }

    log(level: string, message: string): Logger {
        
        // format the message using config.formatter
        // save the formatted entry using config.storage

        return this;
    }
}