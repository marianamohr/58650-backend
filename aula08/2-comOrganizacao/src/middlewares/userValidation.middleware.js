const userValidation = (req, res, next) => {
  const { name, sobrenome, idade, curso } = req.body;
  if (!name || !sobrenome || !idade || !curso) {
    return res.status(400).json({ message: "invalid values" });
  }
  next();
};

module.exports = userValidation;
