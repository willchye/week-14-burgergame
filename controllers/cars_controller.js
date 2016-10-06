/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var cars = require('../models/cars.js');

router.get('/', function(req, res) {
    res.redirect('/cars');
});

router.get('/cars', function(req, res) {
    cars.all(function(data) {
        var hbsObject = {
            cars: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/cars/create', function(req, res) {
    cars.create(['model', 'rented'], [req.body.model, req.body.rented], function() {
        res.redirect('/cars');
    });
});

router.put('/cars/update/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    cars.update({
        rented: req.body.rented
    }, condition, function() {
        res.redirect('/cars');
    });
});

router.delete('/cars/delete/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    cars.delete(condition, function() {
        res.redirect('/cars');
    });
});

module.exports = router;
