const mongoose = require('../config/db.config');

const Schema = new mongoose.Schema({
    nama: {
        desc: "Nama user",
        trim: true,
        type: String,
        required: true,
    },
    email: {
        desc: "Email user",
        trim: true,
        type: String,
        index: true,
        unique: true,
        required: true,
    },
    pesan: {
        desc: "Keterangan pesan user",
        trim: true,
        type: String,
        required: true,
    },
},
{
    strict: true,
    versionKey: false,
    timestamps:{createdAt: "createdAt", updatedAt: "updatedAt"}
});

module.exports = mongoose.model("Pesan", Schema);