import { createLogger, format, transports } from 'winston';

const transportes = [];

if (process.env.NODE_ENV === 'production') {
  transportes.push(new transports.File({ filename: 'logs/kb.log' }));
} else {
  transportes.push(new transports.Console({ level: 'debug' }));
}

const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.colorize(),
    format.align(),
    format.printf(info => `${info.timestamp} ${info.level} ${info.message}`),
  ),
  transports: transportes,
});

logger.stream = {
  write: (message) => {
    logger.info(message);
  },
};

export default logger;
