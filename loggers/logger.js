const { createLogger, format } = require("winston");
const winstonDaily = require("winston-daily-rotate-file");
// 로그를 남기기 위한 값

const logDir = "logs";

const logFormat = format.printf((info) => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});

const heroLogger = createLogger({
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    logFormat
  ),
  transports: [
    new winstonDaily({
      filename: "heroLogger.log",
      datePattern: "YYYY-MM-DD",
      dirname: logDir,
      level: "info",
    }),
    new winstonDaily({
      datePattern: "YYYY-MM-DD",
      dirname: logDir,
      filename: "heroLogger-error.log",
      level: "error",
    }),
  ],
});

heroLogger.stream = {
  // morgan wiston 설정
  write: (message) => {
    logger.info(message);
  },
};

module.exports = { heroLogger };
