const Pesan = require('../models/pesan.controller');
const bcrypt = require('bcryptjs');

exports.create = (req,res) => {
    if(!req.body.nama || !req.body.email || !req.body.pesan){
        return res.status(400).send({
            message: "Required field can not be empty",
        });
    }

    const pesan2 = new Pesan({
        nama: req.body.nama,
        email: req.body.email,
        pesan: req.body.pesan,
    });

    pesan2
        .save()
        .then((data) => {
            res.send(data);
        })
        .catch((e) => {
            res.status(500).send({
                message: e.message || "Some error occured while creating"
            });
        });
};

exports.findAll = (req,res) => {
    Pesan.find()
        .sort({nama: -1})
        .then((user) => {
            res.status(200).send(user);
        })
        .catch((e) => {
            res.send(500).send({
                message: e.message || "Error Occured"
            });
        });
};

