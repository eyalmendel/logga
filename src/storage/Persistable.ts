'use strict'

import Entry from "../entry/Entry";

/**
 * Interface for storage entities
 */
export default interface Persistable {

    setResource(resource?: any): void;
    
    save(entry: Entry): boolean;
}