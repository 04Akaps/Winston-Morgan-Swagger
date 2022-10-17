const express = require("express");
const router = express.Router();

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Express Swagger",
      description: "Swagger 연습용",
    },
    servers: [
      {
        url: "http://localhost:8080", // 요청 URL
      },
    ],
  },
  apis: ["./router/*.js"], //Swagger 파일 연동
};

const swaggerSpec = swaggerJsdoc(options);

const settingSwagger = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerSpec),
};

module.exports = settingSwagger;
