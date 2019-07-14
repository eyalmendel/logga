'use strict'

import { Entry } from '../entry/Entry';

/**
 * Interface for storage entities
 */
export default interface Persistable {

    getResource(): any;

    setResource(resource?: any): Persistable;
    
    save(entry: Entry): boolean;
}