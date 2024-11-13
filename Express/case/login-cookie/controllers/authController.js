const login = (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        res.cookie('user', username, { signed: true, httpOnly: true });
        res.send('Login Berhasil');
    } else {
        res.status(401).send('Username atau password salah');
    }
};

const logout = (req, res) => {
    res.clearCookie('user');
    res.send('Logout Berhasil');
};

const dashboard = (req, res) => {
    if (req.signedCookies.user) {
        res.sendFile('dashboard.html', { root: 'views' });
    } else {
        res.redirect('/');
    }
}

module.exports = { login, logout, dashboard };