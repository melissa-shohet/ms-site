var express = require('express'); 
var fs = require('fs');

var app = express();
const port = 8080;


app.get('/', (req, res) => {
    fs.readFile(__dirname + '\\src\\index.html', 'utf8', function(err, text){
        res.send(text); 
    })
});

app.get('/about-me', (req, res) => {
    fs.readFile(__dirname + '\\src\\html\\about-me.html', 'utf8', function(err, text){
        res.send(text); 
    })
});

app.get('/upcoming-projects', (req, res) => {
    fs.readFile(__dirname + '\\src\\html\\upcoming-projects.html', 'utf8', function(err, text){
        res.send(text); 
    })
});

app.get('/media-gallery', (req, res) => {
    fs.readFile(__dirname + '\\src\\html\\media-gallery.html', 'utf8', function(err, text){
        res.send(text); 
    })
});

app.get('/photo-gallery', (req, res) => {
    fs.readFile(__dirname + '\\src\\html\\photo-gallery.html', 'utf8', function(err, text){
        res.send(text); 
    })
});

app.get('/contact-me', (req, res) => {
    fs.readFile(__dirname + '\\src\\html\\contact-me.html', 'utf8', function(err, text){
        res.send(text); 
    })
});

// Static HTML/resources
/*app.get('/resources/js/classie.js', (req, res) => {
    fs.readFile(__dirname + '\\src\\data\\classie.js', 'utf8', function(err, text){
        res.send(text); 
    })
});

app.get('/resources/js/events.js', (req, res) => {
    fs.readFile(__dirname + '\\src\\data\\events.js', 'utf8', function(err, text){
        res.send(text); 
    })
});

app.get('/resources/js/modernizr.custom.js', (req, res) => {
    fs.readFile(__dirname + '\\src\\data\\modernizr.custom.js', 'utf8', function(err, text){
        res.send(text); 
    })
});

app.get('/resources/js/scrollAnimation.js', (req, res) => {
    fs.readFile(__dirname + '\\src\\data\\scrollAnimation.js', 'utf8', function(err, text){
        res.send(text); 
    })
});*/

app.get('/resources/data/upcoming-projects.json', (req, res) => {
    fs.readFile(__dirname + '\\src\\data\\upcoming-projects.json', 'utf8', function(err, text){
        res.send(text); 
    })
});

app.use('/static', express.static(__dirname + '\\src'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});