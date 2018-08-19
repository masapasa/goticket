const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(express.static(__dirname + `/public`));

// home routes

server.get('/', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/index.html');
});

server.get('/location', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/selectArea.html');
});



// vendorList routes
server.get('/topTrucks', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/topTrucksList.html');
});


server.get('/allTrucks', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/allTrucksList.html');
});

server.get('/allPlants', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/allPlantsList.html');
});

server.get('/plantLocationMap', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/plantLocationMap.html');
});

server.get('/truckNearMe', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/truckNearMe.html');
});

server.get('/truckRoute', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/truckRouteMap.html');
});

server.get('/signUp', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/signUp.html');
});

server.get('/thanks', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/thanks.html');
});

// knowledge

server.get('/information', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/knowledgeMenu.html');
});

server.get('/listKnowledge', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/listKnowledge.html');
});

server.get('/articleExample', function(req, res) {
  console.log(__dirname);
    res.sendFile(__dirname + '/public/articleExample.html');
});


server.listen(8080, () => console.log('Listening'));
