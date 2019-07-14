'use strict'

import Persistable from "./Persistable";
import { Console } from './Console';
import { File } from './File';

export class PersistableFactory {

    create(key: string): Persistable {

        switch(key) {
            case 'console': {
                return new Console();
            }
            case 'file': {
                return new File();
            }
            default: {
                return new Console();
            }
        }
    }
}