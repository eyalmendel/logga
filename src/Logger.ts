"use strict";

import { Entry } from "./entry/Entry";
import { Levels } from "./levels/Levels";
import { BaseConfig } from "./config/BaseConfig";

export class Logger {
  private config: BaseConfig;

  constructor(config: BaseConfig) {
    this.config = config;
  }

  public log(level: string, message: string): Logger {
    // check if applied level is qualified
    const configuredLevel = this.config.getLevel();
    if (!this.isLevelQualified(level, configuredLevel)) {
      return this;
    }

    // create a new entry instance
    let entry: Entry = new Entry(message, level, this.config.getTag());

    // format the message using config.formatter
    let formattedEntry = this.config.getFormatter().format(entry);

    // save the formatted entry using config.storage
    const saved = this.config.getStorageMethod().save(formattedEntry);
    if(!saved) {
        console.error("Logger failed to save the log to specified resource. " +
         "Saving to fallback resource...");
        this.config.getDefaultStorageMethod().save(formattedEntry);
    }

    return this;
  }

  private isLevelQualified = (givenLevel: string, configuredLevel: string): boolean => {
    return Levels.compareLevels(givenLevel, configuredLevel) <= 0;
  };
}
