const userDao = require("../factory/factory")
const { userDTO } = require("../dto/users.dto");

const get = async () => {
  const users = await userDao.get();
  const usersFormated = users.map((u) => {
    return userDTO(u);
  });
  return usersFormated;
};

const getByEmail = async (email) => {
  const users = await userDao.getByEmail(email)
  return userDTO(users);
};

module.exports = { get, getByEmail };
