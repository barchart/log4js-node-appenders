# @barchart/log4js-node-appenders

[![AWS CodeBuild](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiWXVHSTFxZHNGYnJ1SVM0LzZsdHEvU0ZIRlpYUUhvN2FJWm1kUE01dStHeGtuTmJQVmQrY2hKUXQxTEl6RmQzOUZUdlZNaWtLNmNhNHhFM3drRkRFamVvPSIsIml2UGFyYW1ldGVyU3BlYyI6IkRsWndGZFVsTUNBd1BIS3AiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)](https://github.com/barchart/log4js-node-appenders)

Assorted _appenders_ to be used with [log4js](https://github.com/log4js-node/log4js-node).

### Console Appender (for AWS Lambda)

A console appender that routes output to the correct ```console``` function, according to log level. This appender is useful for logging within an AWS Lambda function.

* TRACE -> ```console.trace```
* DEBUG -> ```console.debug```
* INFO -> ```console.log```
* WARN -> ```console.warn```
* ERROR -> ```console.error```
* FATAL -> ```console.error```

**Example**




