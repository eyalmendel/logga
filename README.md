# logga-ts

A simple logging facility written in Typescript.

[![NPM][npm-icon]][npm-url]

### Installation

`npm install --save logga-ts`

### Usage

After requiring `logga-ts` you should create a new logger instance using the `createLogger` method.
This method should be passed the logger's configuration using a json object (literal javascript object). Calling `createLogger` with an empty json, or without any argument at all will result in the default logger. Any missing attriubute in the configuration will be filled automatically with its corresponding default value (see [Configuration](#configuration)).

``` js
const logga = require('logga-ts').Logga;

let logger = logga.createLogger({
    tag: 'my-module',
    level: 'info',
    format: 'json'
});

logger.log('warning', 'my logging message');
```

### Logging Levels

`logga-ts` offers the following logging levels:

``` js
const LevelValues: any = {
    "fatal": 0,
    "severe": 1,
    "critical": 2,
    "error": 3,
    "warning": 4,
    "info": 5,
    "debug": 6,
    "trace": 7
};
```
Omitting the 'level' attribute from the json configuration object will result in the default 'info' level for the created logger instance.
Note: In the current `logga-ts` version the logging levels are not extendable.

### Configuration

Each logger instance holds a configuration object that defines its beahvior.
During the logger instantiation a literal javascript object is expected to be passed in to the `createLogger` method. Calling `createLogger` with an empty json, or without any argument at all will result in the default logger. Any missing attriubute in the configuration will be filled automatically with its corresponding default value. The logger object will create a Configuration instance from the delivered json (or from the default json it holds).
Here is an example of a "fully configured" logger instance:

``` js
...
// Logging into a file using json formatting
const config = {
    tag: 'my-module',
    level: 'error',
    format: 'json',
    storage: {
        method: 'file',
        resource: '/path/to/log/file.log'
    }
};

let logger = Logga.createLogger(config);
...
```
`logga-ts`'s default configuration is to log each entry to the console in string format.

##### Customizing Default Configuration
`logga-ts` offers developers to set their own default configuration using the `configure` method. This method expects a json object just like the `createLogger` method.

### Formats

`logga-ts` offers two format types for the log entries: string format and JSON format. Each entry will be serialized before it is appended to the storage medium, but the entry data will be presented according to the configured format. Omitting the `format` attribute from the configuration will result the default string format.

### Persistance

`logga-ts` offers two persistance methods: file storage and the console. The `storage` attribute in the configuration file is an object consisting of the following fields:
* `method`: the persistance method to be used (defaults to the console),
* `resource`: a path to the log file in case the file method was chosen.

In case of an error during the persistance phase, the logger will use the fallback method (console) and will add an error message (in the console) to indicate what went wrong. In any case the logger will not fail and will not crash the app.

[npm-icon]: https://nodei.co/npm/logga-ts.svg?downloads=true
[npm-url]: https://npmjs.org/package/logga-ts