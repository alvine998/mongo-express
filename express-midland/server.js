const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const router = require('./routes/pesan.routes');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req,res) => {
    res.json({"message": "Congratulations"});
});

app.use("/", router);
app.use("/pesan", require('./routes/pesan.routes'));
app.use("/profil", require('./routes/profil.routes'));

app.listen(8000);
console.log("Listening to Port 8000");