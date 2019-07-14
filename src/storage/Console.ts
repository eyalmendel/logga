'use strict'

import { Entry } from '../entry/Entry';
import Persistable from "./Persistable";

export class Console implements Persistable {

    getResource(): any {
        
    }

    setResource(resource?: any): Persistable {
        // this implementation doesn't need a resource
        return this;
    }

    save(entry: Entry): boolean {
        return true;
    }
}