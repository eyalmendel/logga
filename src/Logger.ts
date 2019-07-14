'use strict'

import { Entry } from './entry/Entry';
import { Levels }  from './levels/Levels';
import { BaseConfig } from './config/BaseConfig';


export class Logger {

    private config: BaseConfig;

    constructor(config: BaseConfig) {
        this.config = config;
    }

    public log(level: string, message: string): Logger {
        
        // check if applied level is qualified
        const configuredLevel = this.config.getLevel();
        if(!this.isLevelQualified(level, configuredLevel)) {
            return this;
        }

        // create a new entry instance
        let entry = new Entry(message, level);

        // format the message using config.formatter
        let formattedEntry: any = this.config.getFormatter().format(entry);
        
        // save the formatted entry using config.storage
        this.config.getStorageMethod().save(formattedEntry);

        return this;
    }

    private isLevelQualified = (givenLevel: string, configuredLevel: string) => {
        return Levels.compareLevels(givenLevel, configuredLevel) <= 0;
    }

}