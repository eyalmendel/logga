'use strict'

/**
 * Base class for log entry types
 */
export class Entry {
    
    showDateAndTime: boolean = true;
    showProcessId: boolean = true;
    showFileDetails: boolean = true;
    level: string;
    message: string;

    constructor(message: string, level: string) {
        this.message = message;
        this.level = level;
    }

    toggleDateAndTime(value: boolean): Entry {
        this.showDateAndTime = value;
        return this;
    }

    toggleProcessId(value: boolean): Entry {
        this.showProcessId = value;
        return this;
    }
    
    setLevel(level: string): Entry {
        this.level = level;
        return this;
    }

    setMessage(message: string): Entry {
        this.message = message;
        return this;
    }

}