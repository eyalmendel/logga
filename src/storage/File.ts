"use strict";

import Persistable from "./Persistable";
import fs = require("fs");

export class File implements Persistable {
  private resource!: string;
  private encoding: string = 'utf8';

  getResource(): any {}

  setResource(resource: any): Persistable {
    this.resource = resource;
    return this;
  }

  save(entry: string): boolean {

    try {
      fs.appendFileSync(this.resource, entry, this.encoding);
      return true;
    } catch (err) {
      return false;
    }
  }
}
