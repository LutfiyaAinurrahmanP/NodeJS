const checkAuth = (req, res, next) => {
    if (req.signedCookies.user) {
        res.redirect('/dashboard')
    } else {
        res.status(403).send('Anda harus login terlebih dahulu');
        next();
    }
};

module.exports = checkAuth;