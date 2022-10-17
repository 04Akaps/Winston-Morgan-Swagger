const express = require("express");
const router = express.Router();

const { one, two, three, four } = require("../controllers/SwaggerDummy");

/**
 * @swagger
 * paths:
 *  /one:
 *    get:
 *      summary : "데이터는 안나올껍니다."
 *      description : "Test용 입니다"
 *      tags: [Test]
 */
router.get("/one", one);
/**
 * @swagger
 * paths:
 *  /two:
 *   post:
 *    summary : "Post 입니다."
 *    description : "Post Test입니다."
 *    tags: [Test]
 *    requestBody:
 *      description: "들어온 값 그대로 resturn 됩니다."
 *      required : true
 *      content:
 *       application/json:
 *          schema:
 *            type: object
 *            properties:
 *              Number:
 *                type: integer
 *                description: "return할 Number"
 *    responses:
 *      "200":
 *        description: 사용자가 서버로 전달하는 값에 따라 결과 값은 다릅니다.(유저 수정)
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example:
 *                   "너가 보낸 값을 * 이야"
 */
router.post("/two", two);
router.put("/three", three);
router.delete("/four", four);

module.exports = router;
