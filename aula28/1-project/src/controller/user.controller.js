const service = require("../service/user.service");

const get = async (req, res) => {
  const user = await service.get();
  return res.status(200).json({ message: user });
};

const getByEmail = async (req, res) => {
  const {email} = req.params
  const user = await service.getByEmail(email)
  return res.status(200).json({ message: user });
};

module.exports = { get, getByEmail };
