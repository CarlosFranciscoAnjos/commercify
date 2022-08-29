import * as winston from 'winston';
const { combine, timestamp, printf } = winston.format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `[Commercify] ${level.toUpperCase()} - ${timestamp} - ${message}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), logFormat),
  defaultMeta: { service: 'application' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'info.log', level: 'info' }),
  ],
});

export default logger