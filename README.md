# @barchart/log4js-node-appenders

[![AWS CodeBuild](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiWXVHSTFxZHNGYnJ1SVM0LzZsdHEvU0ZIRlpYUUhvN2FJWm1kUE01dStHeGtuTmJQVmQrY2hKUXQxTEl6RmQzOUZUdlZNaWtLNmNhNHhFM3drRkRFamVvPSIsIml2UGFyYW1ldGVyU3BlYyI6IkRsWndGZFVsTUNBd1BIS3AiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://github.com/barchart/log4js-node-appenders)
[![NPM](https://img.shields.io/npm/v/@barchart/common-js)](https://www.npmjs.com/package/@barchart/log4js-node-appenders)

Assorted _appenders_ for use with the [log4js](https://github.com/log4js-node/log4js-node) library.

### Console Appender (for AWS Lambda)

A console appender that routes output to the correct function of the ```console``` object. This appender is useful for logging within an AWS Lambda function (avoids writing all logs at the ```INFO``` level).

* ```TRACE``` -> ```console.trace```
* ```DEBUG``` -> ```console.debug```
* ```INFO``` -> ```console.log```
* ```WARN``` -> ```console.warn```
* ```ERROR``` -> ```console.error```
* ```FATAL``` -> ```console.error```

**Usage Example**

```js
const log4js = require('log4js');

const appenders = require('@barchart/log4js-node-appenders');

log4js.configure({
	categories: {
		default: { appenders: [ 'lambda' ], level: 'trace' }
	},
	appenders: {
		lambda: {
			type: appenders.lambda,
			layout: {
				type: 'pattern',
				pattern: '%c - %m%'
			}
		}
	}
});

const logger = log4js.getLogger('Example');

logger.trace('Trace level log message');
logger.debug('Debug level log message');
logger.info('Info level log message');
logger.warn('Warn level log message');
logger.error('Error level log message');
logger.fatal('Fatal level log message');
```

### Package Managers

This library is available as a *public* module on NPM.

```shell
npm install @barchart/log4js-node-appenders -S
```

### License

This software is provided under the MIT license.



