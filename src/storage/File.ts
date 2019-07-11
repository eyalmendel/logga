'use strict'

import Persistable from "./Persistable";
import Entry from "../entry/Entry";

export class File implements Persistable {
    setResource(resource: any): void {
    }

    save(entry: Entry): boolean {
        return true;
    }
}