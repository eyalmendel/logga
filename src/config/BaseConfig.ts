"use strict";

import { PersistableFactory } from "./../storage/PersistableFactory";
import { FormatterFactory } from "./../formats/FormatterFactory";
import { Levels } from "../levels/Levels";
import Persistable from "../storage/Persistable";
import { Formatter } from "../formats/Formatter";

export class BaseConfig {
  private defaultTag!: string;
  private defaultLevel!: string;
  private defaultFormat: string = "string";
  private defaultFormatter!: Formatter;
  private defaultStorageMethod: string = "console";
  private defaultPersistable!: Persistable;
  private tag!: string;
  private level!: string;
  private storageMethod!: Persistable;
  private formatter!: Formatter;

  constructor(json?: any) {
    this.setDefault();
    this.fromJson(json);
  }

  private setDefault(): void {
    this.defaultTag = "no-tag";
    this.defaultLevel = Levels.INFO;
    this.defaultFormatter = FormatterFactory.create(this.defaultFormat);
    this.defaultPersistable = PersistableFactory.create(this.defaultStorageMethod);
  }

  private fromJson(json: any): void {
    const method = json && json.storage ? json.storage.method : null;
    const resource = json && json.storage ? json.storage.resource : null;

    this.tag = json && json.tag || this.defaultTag;
    this.level = json && json.level || this.defaultLevel;
    this.storageMethod = PersistableFactory.create(method || this.defaultStorageMethod)
        .setResource(resource);
    this.formatter = FormatterFactory.create(json && json.format || this.defaultFormat);
  }

  public getTag(): string {
    return this.tag;
  }

  public getLevel(): string {
    return this.level;
  }

  public getStorageMethod(): Persistable {
    return this.storageMethod;
  }

  public getFormatter(): Formatter {
    return this.formatter;
  }

  public getDefaultStorageMethod(): Persistable {
    return this.defaultPersistable;
  }

  public getDefaultFormatter(): Formatter {
    return this.defaultFormatter;
  }

  public setTag(tag: string): void {
    this.tag = tag;
  }

  public setLevel(level: string): void {
    this.level = level;
  }

  public setStorageMethod(storageMethod: Persistable): void {
    this.storageMethod = storageMethod;
  }

  public setFormatter(formatter: Formatter): void {
    this.formatter = formatter;
  }
}
