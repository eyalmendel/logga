'use strict'

import { PersistableFactory } from './../storage/PersistableFactory';
import { FormatterFactory } from './../formats/FormatterFactory';
import { Levels } from '../levels/Levels';
import Persistable from '../storage/Persistable';
import { Formatter } from '../formats/Formatter';

export class BaseConfig {

    private defaultFormatter: string = "string";
    private defaultPersistable: string = "console";
    private tag!: string;
    private level!: string;
    private storageMethod!: Persistable;
    private formatter!: Formatter;

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
        this.storageMethod = PersistableFactory
            .create(this.defaultPersistable);
        this.formatter = FormatterFactory
            .create(this.defaultFormatter);
    }

    private fromJson(json: any): void {
        const { method, resource } = json.storage;
        
        this.tag = json.tag;
        this.level = json.level;
        this.storageMethod = PersistableFactory
            .create(method)
            .setResource(resource);
        this.formatter = FormatterFactory
            .create(json.format);
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