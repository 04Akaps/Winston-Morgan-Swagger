const { testLogger } = require("../loggers/logger");

const loggerInfoTest = async () => {
  testLogger.info("testLogger Info 테스트 입니다.");
};

const loggerErrorTest = async () => {
  testLogger.info("testLogger Error 테스트 입니다.");
};

module.exports = {
  loggerInfoTest,
  loggerErrorTest,
};
