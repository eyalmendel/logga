'use strict'

import { Levels } from '../levels/Levels';
import Persistable from '../storage/Persistable';
import { Console } from './../storage/Console';


export class BaseConfig {
    tag: string = "";
    level: string = "";
    storage: Persistable | undefined;

    constructor(json?: any) {
        if(json === undefined) {
            this.setDefault();
        } else {
            this.fromJson(json);
        }
    }

    setDefault(): void {
        this.tag = "";
        this.level = Levels.INFO;
        this.storage = new Console();
    }
    fromJson(json: any): void {
        this.tag = json.tag;
        this.level = json.level;
        this.storage = json.storage;
    }
}