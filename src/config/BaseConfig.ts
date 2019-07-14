'use strict'

import { PersistableFactory } from './../storage/PersistableFactory';
import { FormatterFactory } from './../formats/FormatterFactory';
import { Levels } from '../levels/Levels';
import Persistable from '../storage/Persistable';
import { Formatter } from '../formats/Formatter';

export class BaseConfig {

    private defaultFormatter: string = "string";
    private defaultPersistable: string = "console";
    private tag: string | undefined;
    private level: string | undefined;
    private storage: Persistable | undefined;
    private formatter: Formatter | undefined;

    constructor(json?: any) {
        if(json === undefined) {
            this.setDefault();
        } else {
            this.fromJson(json);
        }
    }

    private setDefault(): void {
        this.tag = "";
        this.level = Levels.INFO;
        this.storage = (new PersistableFactory().create(this.defaultPersistable));
        this.formatter = (new FormatterFactory().create(this.defaultFormatter));
    }

    private fromJson(json: any): void {
        this.tag = json.tag;
        this.level = json.level;
        this.storage = (new PersistableFactory().create(json.storage));
        this.formatter = (new FormatterFactory().create(json.format));
    }

    public getTag(): string | undefined {
        return this.tag;
    }

    public getLevel(): string | undefined {
        return this.level;
    }

    public getStorage(): Persistable | undefined {
        return this.storage;
    }

    public getFormatter(): Formatter | undefined {
        return this.formatter;
    }

    public setTag(tag: string): void {
        this.tag = tag;
    }

    public setLevel(level: string): void {
        this.level = level;
    }

    public setStorage(storage: Persistable): void {
        this.storage = storage;
    }

    public setFormatter(formatter: Formatter): void {
        this.formatter = formatter;
    }
}