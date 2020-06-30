const lambdaAppender = require('./lib/lambda.js');

const appenders = { };

appenders.lambda = lambdaAppender;

module.exports = appenders;

