const express = require("express")
const { registerUser, authUser } = require("../controllers/userController");

const router = express.Router() //Instance of the express
router.route('/').post(registerUser)    //register api end point
router.post('/login', authUser)

module.exports = router;