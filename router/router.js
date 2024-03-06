const express = require("express")
const router = express.Router()

// import
const { handleUserSignup, handleUserLogin } = require("../controller/controller");

router.post("/", handleUserSignup);
router.post("/login", handleUserLogin);

module.exports = router;
// export
