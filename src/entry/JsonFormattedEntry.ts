"use strict";

import { Entry, EntryStructure } from "./Entry";

export class JsonFormattedEntry {
  private formattedData!: EntryStructure;
  private entry: Entry;

  constructor(entry: Entry) {
    this.entry = entry;
    this.formattedData = new EntryStructure();
    this.toJson();
  }

  public getFormattedData(): EntryStructure {
    return this.formattedData;
  }

  private toJson(): void {
    const { entry } = this;

    this.formattedData.dateTime = entry.getDateAndTime();
    this.formattedData.processId = entry.getProcessId();
    this.formattedData.level = entry.getLevel();
    this.formattedData.message = entry.getMessage();
    this.formattedData.tag = entry.getTag();
    this.formattedData.fileName = entry.getFileName();
    this.formattedData.rowInFile = entry.getRowInFile();
  }
}
