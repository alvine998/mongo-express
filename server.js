const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOption = {
    origin:"http://localhost:8081"
};

app.use(bodyParser.json());
app.use(cors(corsOption));

app.use(bodyParser.urlencoded({extended:true}));

const db = require('./models');

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(() => {
        console.log("Connected to database");
    })
    .catch(err => {
        console.log("Cannot connect to the database");
        process.exit();
    });

app.get("/", (req,res) => {
    res.json({message: "Hello"});
});

require('./routes/resgist.route')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server running on Port '+PORT);
});
