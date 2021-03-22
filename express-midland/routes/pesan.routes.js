const express = require('express');
const router = express.Router();
const pesanController = require('../controllers/pesan.controller');

router.get("/", pesanController.findAll);
router.post("/", pesanController.create);

module.exports = router;