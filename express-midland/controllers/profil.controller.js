const Profil = require('../models/profil.controller');

exports.create = (req,res) => {
    if(!req.body.profile || !req.body.visi || !req.body.misi || !req.body.sejarah){
        return res.status(400).send({
            message: "Required field can not be empty",
        });
    }

    const profil2 = new Profil({
        profile: req.body.profile,
        visi: req.body.visi,
        misi: req.body.misi,
        sejarah: req.body.sejarah,
    });

    profil2
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
    Profil.find()
        .sort({profile: -1})
        .then((prof) => {
            res.status(200).send(prof);
        })
        .catch((e) => {
            res.send(500).send({
                message: e.message || "Error Occured"
            });
        });
};

exports.Update = (req,res) => {
    if(!req.body.profile || !req.body.visi || !req.body.misi || !req.body.sejarah){
        return res.status(400).send({
            message: "Required field can not be empty",
        });
    }
    Profil.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((prof) => {
        if(!prof) {
            return res.status(404).send({
                message: "Id not found",
            });
        }
        res.status(200).send(prof);
    })
    .catch((err) => {
        return res.status(404).send({
            message: "Error while updating post"
        });
    });
};

