const levels = new Map();

levels.set('TRACE', console.trace.bind(console));
levels.set('DEBUG', console.debug.bind(console));
levels.set('INFO', console.log.bind(console));
levels.set('WARN', console.warn.bind(console));
levels.set('ERROR', console.error.bind(console));
levels.set('FATAL', console.error.bind(console));

function appender(layout, timezoneOffset) {
	return (loggingEvent) => {
		let log;

		if (loggingEvent.level && levels.has(loggingEvent.level.levelStr)) {
			log = levels.get(loggingEvent.level.levelStr);
		} else {
			log = levels.get('INFO');
		}

		log(layout(loggingEvent, timezoneOffset));
	};
}

function configure(config, layouts) {
	let layout = layouts.colouredLayout;

	if (config.layout) {
		layout = layouts.layout(config.layout.type, config.layout);
	}

	return appender(layout, config.timezoneOffset);
}

module.exports.configure = configure;
