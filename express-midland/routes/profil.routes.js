const express = require('express');
const router = express.Router();
const profilController = require('../controllers/profil.controller');

router.get("/", profilController.findAll);
router.post("/", profilController.create);
router.put("/:id", profilController.Update);

module.exports = router;