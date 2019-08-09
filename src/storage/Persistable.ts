'use strict'

/**
 * Interface for storage entities
 */
export default interface Persistable {

    getResource(): any;

    setResource(resource?: any): Persistable;
    
    save(entry: string): boolean;
}