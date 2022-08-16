"use strict";

const express = require("express"),
 homeController =require("./controller/homeController"),
 layouts = require("express-ejs-layouts"),
 Subscriber = require("./models/subscriber");

const app = express();

app.set("port", process.env.PORT || 3000);


app.use(
express.urlencoded({
extended: false
})
);
app.use(express.json());
app.set("view engine", "ejs");
app.use(layouts);

/* const MongoDB = require("mongodb").MongoClient,
dbURL = "mongodb://localhost:27017",
dbName = "recipe_db";
MongoDB.connect(dbURL, (error, client) => {
if (error) throw error;
let db = client.db(dbName);
db.collection("contacts")
.find()
.toArray((error, data) => {
if (error) throw error;
console.log(data);
});*/

const mongoose = require("mongoose");
mongoose.connect(
"mongodb://localhost:27017/recipe_db",
{useNewUrlParser: true}
);
const db = mongoose.connection;
db.once("open", () => {
console.log("Successfully connected to MongoDB using Mongoose!");
});
var myQuery = Subscriber.findOne({
name: "Jon Wexler"
})
.where("email", /wexler/);
myQuery.exec((error, data) => {
if (data) console.log(data.name);
});

/*
db.collection("contacts")
.insert({
name: "Marck",
email: "freman@mark.com"
}, (error, db) => {
if (error) throw error;
console.log(db);

});*/

db.once("open", () => {
console.log("Successfully connected to MongoDB using Mongoose!");
});

/*const subscriberSchema = mongoose.Schema({
name: String,
email: String,
zipCode: Number
});

const Subscriber
= mongoose.model("Subscriber", subscriberSchema) */

//first way to inatiate and save an instance of a model
/*var subscriber1 = new Subscriber({
name: "Malick Wexler",
email: "Malick@jonwexler.com"
});
subscriber1.save((error, savedDocument) => {
if (error) console.log(error);
console.log(savedDocument);
});

//second way to inatiate and save an instance of a model
//we created a table adding it to the recipe_db

Subscriber.create(
{
name: "Jon Wexler",
email: "jon@jonwexler.com"
},
function (error, savedDocument) {
if (error) console.log(error);
console.log(savedDocument);
}
); */

app.use(express.static
("public"));

app.get("/", (req, res) => {
res.render("index");
});

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);


app.listen(app.get("port"), () => {
console.log(
`Server running at http://localhost:${app.get(
"port"
)}`
);
});
