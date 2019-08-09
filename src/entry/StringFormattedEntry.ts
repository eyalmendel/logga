"use strict";

import { Entry } from "./Entry";

export class StringFormattedEntry {
  private formattedData: string = "";
  private entry: Entry;

  constructor(entry: Entry) {
    this.entry = entry;
    this.toString();
  }

  public getFormattedData(): string {
    return this.formattedData;
  }

  private toString(): void {
    const { entry } = this;

    this.formattedData = 
        `${entry.getDateAndTime()}` + 
        `${entry.getProcessId()} ` +
        `${entry.getLevel(true)} ` +
        `${entry.getTag()} ` +
        `${entry.getFileName()}:` +
        `${entry.getRowInFile()} ` +
        `${entry.getMessage()}\n`
  }
}
