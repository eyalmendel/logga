'use strict'

const LevelValues: any = {
    "fatal": 0,
    "severe": 1,
    "critical": 2,
    "error": 3,
    "warning": 4,
    "info": 5,
    "debug": 6,
    "trace": 7
};

export class Levels {

    static TRACE: string = "trace";
    static DEBUG: string = "debug";
    static INFO: string = "info";
    static WARNING: string = "warning";
    static ERROR: string = "error";
    static CRITICAL: string = "critical";
    static SEVERE: string = "severe";
    static FATAL: string = "fatal";

    static compareLevels(level1: string, level2: string) {
        return LevelValues[level1] - LevelValues[level2]
    }
}