const { createLogger, format, transports } = require("winston");
const winstonDaily = require("winston-daily-rotate-file");
// 로그를 남기기 위한 값

const logDir = "loggers";

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
      dirname: logDir + "/logs",
      level: "info",
    }),
    new winstonDaily({
      datePattern: "YYYY-MM-DD",
      dirname: logDir + "/error",
      filename: "heroLogger-error.log",
      level: "error",
    }),
  ],
});

const testLogger = createLogger({
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    logFormat
  ),
  transports: [
    new winstonDaily({
      filename: "test.log",
      datePattern: "YYYY-MM-DD",
      dirname: logDir + "/logs",
      level: "info",
    }),
  ],
});

testLogger.add(
  new transports.Console({
    format: format.combine(
      format.colorize(), // 색깔 넣어서 출력
      format.simple() // `${info.level}: ${info.message} JSON.stringify({ ...rest })` 포맷으로 출력
    ),
  })
);

heroLogger.add(
  new transports.Console({
    format: format.combine(
      format.colorize(), // 색깔 넣어서 출력
      format.simple() // `${info.level}: ${info.message} JSON.stringify({ ...rest })` 포맷으로 출력
    ),
  })
);

// heroLogger.stream = {
//   // morgan wiston 설정
//   write: (message) => {
//     logger.info(message);
//   },
// };

// testLogger.stream = {
//   // morgan wiston 설정
//   write: (message) => {
//     logger.info(message);
//   },
// };

module.exports = { heroLogger, testLogger };
