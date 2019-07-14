'use strict'

import { Entry } from "../entry/Entry";

/**
 * Interface for log entries format types
 */
export interface Formatter {

    format(entry: Entry): any;
}