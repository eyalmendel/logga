'use strict'

import { Formatter } from "./Formatter";
import { StringFormatter } from './StringFormatter';
import { JsonFormatter } from './JsonFormatter';

export class FormatterFactory {

    static create(key: string): Formatter {
        
        switch(key) {
            case 'string': {
                return new StringFormatter();
            }
            case 'json': {
                return new JsonFormatter();
            }
            default: {
                return new StringFormatter();
            }
        }
    }
}