const express = require("express");
const MenuController = require("../controllers/menuController")
const router = express.Router();
router.get('/menu', MenuController.getOverview);



module.exports = router;