const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
    console.log("Recieved Request : ", req.body);
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Enter all fields");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User Already Exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("User Not Found..!")
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
        console.log("Entered Password:", password);
        console.log("Stored Hashed Password:", user.password);

        const isMatch = await user.matchPassword(password);
        console.log("Password Match:", isMatch);

        if (isMatch) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                pic: user.pic,
                token: generateToken(user._id),
            });
        } else {
            res.status(401);
            throw new Error("Invalid Password");
        }
    } else {
        res.status(401);
        throw new Error("Invalid Email");
    }
});

module.exports = { registerUser, authUser };