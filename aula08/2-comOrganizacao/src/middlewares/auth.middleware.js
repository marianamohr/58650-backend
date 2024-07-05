const auth = (req, res, next) => {
    const { authorization } = req.query;
    if (!authorization) {
      return res.status(401).json({ message: "sem autorização" });
    }
    next();
  };
  
  module.exports = auth
  