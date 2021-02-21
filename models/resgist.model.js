const { Mongoose } = require("mongoose");

module.exports = mongoose => {
    const Registrasi = mongoose.model(
        "registrasi",
        mongoose.Schema(
            {
                name: String,
                ponsel: Number,
                email: String,
                password: String
            },
            { timestamps: true }
        )
    );
    return Registrasi;
}