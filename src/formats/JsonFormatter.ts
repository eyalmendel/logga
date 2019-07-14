import { Entry } from './../entry/Entry';
'use strict'

import { Formatter } from './Formatter';

export class JsonFormatter implements Formatter {

    format(entry: Entry): object {
        return {};
    }
}