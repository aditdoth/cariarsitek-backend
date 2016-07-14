/**
 * Created by Pradhany on 6/23/2016.
 */

var mongoose = require('mongoose');

var houseTypeSchema = new mongoose.Schema({
    type : String
});

module.exports = mongoose.model('houseTypes', houseTypeSchema);