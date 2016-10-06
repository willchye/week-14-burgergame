/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var cat = {
    all: function(cb) {
        orm.all('cars', function(res) {
            cb(res);
        });
    },
    // cols and vals are arrays
    create: function(cols, vals, cb) {
        orm.create('cars', cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update('cars', objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete('cars', condition, function(res) {
            cb(res);
        });
    }
};

module.exports = cat;
