const passport = require('passport');
const passportCall = (strategy) =>{
return async (req, res, next) => {
    console.log(req.headers)
    passport.authenticate(strategy, function(err, user, info) {
        console.log("BBBBBBB", err, info);
        if (err) return next(err);
        if (!user) {
            return res.status(401).send({error: info.message?info.message: info.toString()});
        }
        req.user = user;
        next();
    })(req,res,next);
}
}


module.exports = passportCall;