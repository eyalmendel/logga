"use strict";

import { JsonFormattedEntry } from "./../entry/JsonFormattedEntry";
import { Entry } from "./../entry/Entry";
import { Formatter } from "./Formatter";

export class JsonFormatter implements Formatter {

  format(entry: Entry): string {
    let formattedEntry = new JsonFormattedEntry(entry).getFormattedData();
    return this.serialize(formattedEntry);
  }

  private serialize(entry: object): string {
    return JSON.stringify(entry);
  }
}
