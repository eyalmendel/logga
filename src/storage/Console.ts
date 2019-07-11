'use strict'

import Persistable from "./Persistable";
import Entry from "../entry/Entry";

export class Console implements Persistable {
    setResource(resource?: any): void {
        // this implementation doesn't need a resource
    }

    save(entry: Entry): boolean {
        return true;
    }
}