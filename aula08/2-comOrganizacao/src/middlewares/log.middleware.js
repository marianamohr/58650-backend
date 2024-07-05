const logMid = (req, res, next) => {
  console.log(
    `${new Date()} - Rota: ${req.url} - Método: ${
      req.method
    }`
  );
  next();
};

module.exports = logMid;
