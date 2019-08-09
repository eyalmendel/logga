'use strict'

import Persistable from "./Persistable";

export class Console implements Persistable {

    getResource(): any {
        // this implementation doesn't need a resource
    }

    setResource(resource?: any): Persistable {
        // this implementation doesn't need a resource
        return this;
    }

    save(entry: string): boolean {
        console.log(entry);
        return true;
    }
}