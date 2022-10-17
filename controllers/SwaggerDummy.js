const one = async (req, res) => {
  res.status(200).send("test");
};

const two = async (req, res) => {
  res.status(200).send({ message: `send Number is ${req.body.Number}` });
};

const three = () => {};

const four = () => {};
module.exports = { one, two, three, four };
