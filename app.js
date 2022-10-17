const createError = require("http-errors");
const Express = require("express");
const cors = require("cors");
require("dotenv").config();

const settingSwagger = require("./swagger/swagger");

const loggerTest = require("./router/loggerTest");

const app = Express();
const PORT = process.env.PORT;

app.use(cors());

// http://localhost:8080/swagger/ 접속시 정보가 뜬다.
app.use("/swagger", settingSwagger.serve, settingSwagger.setup);

app.use("/loggerTest", loggerTest);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  console.log(`Server Started At : ${PORT}`);
});
