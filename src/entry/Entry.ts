"use strict";

import process = require("process");
import stackTrace = require("stack-trace");

export class EntryStructure {
  tag!: string;
  level!: string;
  message!: string;
  dateTime!: string;
  processId: number | undefined;
  fileName!: string;
  rowInFile!: number;
}

/**
 * Base class for log entry types
 */
export class Entry {
  protected level: string;
  protected message: string;
  protected tag: string;
  protected dateTime!: string;
  protected processId: number | undefined;
  protected fileName!: string;
  protected rowInFile!: number;
  protected showDateAndTime: boolean = true;
  protected showProcessId: boolean = true;
  protected showFileDetails: boolean = true;
  private stack: stackTrace.StackFrame[];

  constructor(message: string, level: string, tag: string) {
    this.message = message;
    this.level = level;
    this.tag = tag;
    this.stack = stackTrace.get();
    this.setEntryMetadata();
  }

  public getLevel(format?: boolean): string {
    return format ? this.level.toUpperCase().charAt(0)
    : this.level
  }

  public getMessage(): string {
    return this.message;
  }

  public getTag(): string {
    return this.tag;
  }

  public getDateAndTime(): string {
    return this.dateTime;
  }

  public getProcessId(): number | undefined {
    return this.processId;
  }

  public getFileName(): string {
    return this.fileName;
  }

  public getRowInFile(): number {
    return this.rowInFile;
  }

  public toggleDateAndTime(value: boolean): Entry {
    this.showDateAndTime = value;
    return this;
  }

  public toggleProcessId(value: boolean): Entry {
    this.showProcessId = value;
    return this;
  }

  public toggleFileDetails(value: boolean): Entry {
    this.showFileDetails = value;
    return this;
  }

  private setEntryMetadata(): void {
    this.dateTime = this.getSplitDateAndTime();
    this.processId = this.showProcessId ? process.pid : this.processId;
    if (this.showFileDetails) {
      this.fileName = this.extractFileName();
      this.rowInFile = this.stack[2].getLineNumber();
    }
  }

  private extractFileName(): string {
    const path = this.stack[2].getFileName();
    return path.split("/").pop() || path
  }

  private getSplitDateAndTime(): string {
    const now = new Date();
    return now.toISOString().replace(/[TZ]/g, " ");
  }
}
