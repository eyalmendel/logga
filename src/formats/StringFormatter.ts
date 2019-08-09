import { StringFormattedEntry } from './../entry/StringFormattedEntry';
'use strict'

import { Formatter } from './Formatter';
import { Entry } from '../entry/Entry';

export class StringFormatter implements Formatter {

    format(entry: Entry): string {
        return new StringFormattedEntry(entry).getFormattedData();
    }
}