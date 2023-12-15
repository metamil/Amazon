
const express = require("express");
const bodyParser = require("body-parser");
const router  = express.Router();
const createUser = require("../controllers/userController").createUser;
const loginUser = require("../controllers/userController").loginUser;
const getUser = require("../controllers/userController").getUser;


router.post("/register",createUser);
router.post("/login",loginUser);
router.get("/:userName",getUser);

module.exports = router;