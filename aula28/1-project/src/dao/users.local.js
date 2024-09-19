
const users = [
  {
    "first_name": "Mariana",
    "last_name": "Mohr",
    "email": "marianamohr@gmail.com",
    "password": "$2b$10$RL3BZd5SOKAY1nHZ3G8x4.HNieau2sDtC1E6hmIrOT4t.bWYWHzm.",
    "role": "admin"
  },
  {
    "first_name": "Julia",
    "last_name": "Prado",
    "email": "lucas@gmail.com",
    "password": "123456",
    "role": "admin"
  }
];

const get = () => {
  return users;
};

const getByEmail = (email) => {
  return users.find((user) => user.email === email);
};

module.exports = { get , getByEmail};
