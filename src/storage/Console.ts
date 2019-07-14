'use strict'

import { Entry } from '../entry/Entry';
import Persistable from "./Persistable";

export class Console implements Persistable {
    setResource(resource?: any): void {
        // this implementation doesn't need a resource
    }

    save(entry: Entry): boolean {
        return true;
    }
}