const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf} = format;

const level = process.env.NODE_ENV ? "debug" : "info";
const myFormat = printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
});
exports.newLogger = function (source) {
    const logger = createLogger({
        transports:  [new transports.Console()],
        level: level,
        format: combine(
            label({label: source}),
            timestamp(),
            format.splat(),
            format.simple(),
            myFormat
        )
    });
    return logger;
};
