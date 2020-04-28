const express = require('express'),
    router = express.Router();


let register = require('./register'),
    updateUser = require('./update-user'),
    list = require('./list-user'),
    deleteUser = require('./delete-user');

router.post("/register", register.Register);
router.get("/list-user", list.List);
router.post("/update-user", updateUser.UpdateUser);
router.delete("/delete-user/:user_id", deleteUser.DeleteUser);

module.exports = router;