const { v4: uuidv4 } = require('uuid');

const user = require("../models/user");

const { setUser } = require("../service/auth")

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    await user.create({
        name,
        email,
        password,
    });
    return res.render("home");
}
async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const User = await user.findOne({
        email,
        password,
    });
    if (!User) {
        return res.render("login", {
            error: "invalid user or password"
        })
    }

    const sessionid = uuidv4();
    setUser(sessionid, user);
    res.cookie("uid", sessionid)
    return res.render("home");
}

// export
module.exports = {
    handleUserSignup,
    handleUserLogin,
}