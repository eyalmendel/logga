'use strict'
import { Entry } from '../entry/Entry';
import Persistable from "./Persistable";

export class File implements Persistable {
    setResource(resource: any): void {
    }

    save(entry: Entry): boolean {
        return true;
    }
}