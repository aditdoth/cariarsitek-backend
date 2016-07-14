/**
 * Created by Pradhany on 6/23/2016.
 */

var mongoose = require('mongoose');

var provinceSchema = mongoose.Schema({
    province : String
});

module.exports = mongoose.model('provinces', provinceSchema);