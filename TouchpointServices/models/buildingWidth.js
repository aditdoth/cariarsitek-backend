/**
 * Created by Pradhany on 6/27/2016.
 */

var mongoose = require('mongoose');

var buildingWidthSchema = new mongoose.Schema({
    width : String
});

module.exports = mongoose.model('buildingWidth', buildingWidthSchema);