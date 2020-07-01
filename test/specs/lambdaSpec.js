console.trace = jasmine.createSpy('console.trace');
console.debug = jasmine.createSpy('console.debug');
console.log = jasmine.createSpy('console.log');
console.warn = jasmine.createSpy('console.warn');
console.error = jasmine.createSpy('console.error');

appender = require('./../../lib/lambda');

describe('When the "lambda" appender is accessed', () => {
	it('should return a function', () => {
		expect(typeof appender).toEqual('function');
	});

	describe('and "configured" with a mock "layouts" and an empty "configuration" object', () => {
		let appenderFn;

		function getLoggingEvent(level, data) {
			const event = { };

			event.level = { };
			event.level.levelStr = level;

			event.data = data;

			return event;
		}

		beforeEach(() => {
			appenderFn = appender({ }, { colouredLayout: layout = x => x.data });
		});

		it('the "configured" appender should be a function', () => {
			expect(typeof appenderFn).toEqual('function');
		});

		describe('and a statement is logged at the TRACE level', () => {
			let event;

			beforeEach(() => {
				appenderFn(event = getLoggingEvent('TRACE', 'This is an TRACE statement'));
			});

			it('should call the console.debug function, passing the log string', () => {
				expect(console.trace).toHaveBeenCalledWith(event.data);
			});
		});

		describe('and a statement is logged at the DEBUG level', () => {
			let event;

			beforeEach(() => {
				appenderFn(event = getLoggingEvent('DEBUG', 'This is an DEBUG statement'));
			});

			it('should call the console.debug function, passing the log string', () => {
				expect(console.debug).toHaveBeenCalledWith(event.data);
			});
		});

		describe('and a statement is logged at the INFO level', () => {
			let event;

			beforeEach(() => {
				appenderFn(event = getLoggingEvent('INFO', 'This is an INFO statement'));
			});

			it('should call the console.log function, passing the log string', () => {
				expect(console.log).toHaveBeenCalledWith(event.data);
			});
		});

		describe('and a statement is logged at the WARN level', () => {
			let event;

			beforeEach(() => {
				appenderFn(event = getLoggingEvent('WARN', 'This is an WARN statement'));
			});

			it('should call the console.log function, passing the log string', () => {
				expect(console.warn).toHaveBeenCalledWith(event.data);
			});
		});

		describe('and a statement is logged at the ERROR level', () => {
			let event;

			beforeEach(() => {
				appenderFn(event = getLoggingEvent('ERROR', 'This is an ERROR statement'));
			});

			it('should call the console.log function, passing the log string', () => {
				expect(console.error).toHaveBeenCalledWith(event.data);
			});
		});

		describe('and a statement is logged at the FATAL level', () => {
			let event;

			beforeEach(() => {
				appenderFn(event = getLoggingEvent('FATAL', 'This is an FATAL statement'));
			});

			it('should call the console.log function, passing the log string', () => {
				expect(console.error).toHaveBeenCalledWith(event.data);
			});
		});
	});
});