module.exports = app => {
    const registrasi = require('../controllers/regist.controller');

    var router = require("express").Router();

    router.post("/", registrasi.create);
    router.get("/", registrasi.findAll);

    app.use('/api/registrasi', router);
};