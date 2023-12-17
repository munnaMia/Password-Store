const router = require("express").Router();

let {
    getPassword,
    createPassword,
    getPasswordBYID,
    updatePassword,
    deletePassword
} = require("./passwordHandlers");

router.get("/", getPassword);
router.post("/", createPassword);
router.get("/:id", getPasswordBYID);
router.put("/:id",updatePassword);
router.delete("/:id",deletePassword);

module.exports = router;
