const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
require("dotenv").config();


//REGISTER
router.post("/register", async (req, res) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser;
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});


//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = User.findOne({username: req.body.username})
        !user && res.status(400).json("username not found!")

        const validated = await bcrypt.compare(req.body.password,user.password)
        !validated && res.status(400).json("password is wrong!")

        const{password, ...others} = user._doc;

        res.status(200).json(others)
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router
