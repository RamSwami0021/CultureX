require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:admin@culturex.ql85djo.mongodb.net/CultureX?retryWrites=true&w=majority";
// const uri = process.env.DATABASE;
const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

var db;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Database");
    db = mongoose.connection;
}).catch((err) => {
    console.error("Error in Connecting to Database", err);
});

app.get('/api/UserData/Details', (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect((err) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            return res.status(500).send('Error connecting to MongoDB');
        }

        const collection = client.db().collection("UserData");

        collection.find({}).toArray((err, docs) => {
            if (err) {
                console.error('Error fetching data:', err);
                return res.status(500).send('Error fetching data');
            }
            res.send(docs);
            console.log(docs);
            client.close();
        });
    });
});

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-Origin": '*'
    });
    return res.redirect('index.html');
});

app.listen(8080, () => {
    console.log("Listening on PORT 8080");
});
