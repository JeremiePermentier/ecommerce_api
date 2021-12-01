const router = require("express").Router();
const userCtrl = require('../controllers/userCtrl');

router.post("/add", userCtrl.add);
router.post('/login', userCtrl.login);

module.exports = router;