// Server
const Poll    = require("./models/poll")
var _ = require('lodash');
pry = require("pryjs")
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const path = require("path");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set('view engine', 'ejs')

app.get("/", function (req, res){
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

var polls = {}

app.post("/poll/new", function (req, res) {
  var poll = new Poll(req.body.poll)

  polls[poll.id] = poll;
  res.redirect("/poll/" + poll.id);
});

app.get("/poll/:id", function (req, res) {
  var poll = polls[req.params.id];
  res.render('poll', {pollData: poll})
})

app.get("/vote/:voterId", function (req, res) {
  // eval(pry.it)
  var pollValues = _.values(polls)
  var poll = _.find(pollValues, function(value) {
    return value.voterId === req.params.voterId
  })
  res.render('vote', {pollData: poll})
})

http.listen(process.env.PORT || 3000, function(){
  console.log("Your server is up and running on Port 3000. Good job!");
});
