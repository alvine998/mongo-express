const mongoose = require('../config/db.config');

const Schema = new mongoose.Schema({
    profile: {
        desc: "profil perusahaan",
        trim: true,
        type: String,
        required: true,
    },
    visi: {
        desc: "visi perusahaan",
        trim: true,
        type: String,
        index: true,
        unique: true,
        required: true,
    },
    misi: {
        desc: "misi perusahaan",
        trim: true,
        type: String,
        required: true,
    },
    sejarah:{
        desc: "sejarah perusahaan",
        trim: true,
        type: String,
        required: true,
    }
},
{
    strict: true,
    versionKey: false,
    timestamps:{createdAt: "createdAt", updatedAt: "updatedAt"}
});

module.exports = mongoose.model("Profil", Schema);