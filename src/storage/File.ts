'use strict'
import { Entry } from '../entry/Entry';
import Persistable from "./Persistable";

export class File implements Persistable {

    getResource(): any {

    }

    setResource(resource: any): Persistable {
        return this;
    }

    save(entry: Entry): boolean {
        return true;
    }
}