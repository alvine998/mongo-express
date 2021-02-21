const db = require('../models');
const Regist = db.regist;

// Create and save a new resgitrasi
exports.create = (req,res) => {
    if(!req.body.name){
        res.status(400).send({message: "content cannot be empty"});
        return;
    };

    const registrasi = new Regist({
        name: req.body.name,
        ponsel: req.body.ponsel,
        email: req.body.email,
        password: req.body.password
    });

    registrasi
        .save(registrasi)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                err.message || "Error while creating registration"
            });
        });
};

// Find all registrasi
exports.findAll = (req,res) => {
    const name = req.query.name;
    var condition = name ? {name: {$regex: new RegExp(name), $options: "i"}} : {};

    Regist.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error while find all data"
            });
        });
};

// Find one registrasi
exports.findOne = (req,res) => {

};

// Update resgitrasi
exports.update = (req,res) => {

};

// Delete all resgistrasi
exports.delete = (req,res) => {

};

exports.deleteAll = (req,res) => {

};