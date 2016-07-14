/**
 * Created by Pradhany on 6/28/2016.
 */

var houseType = require('../models/houseType');

module.exports = {
    opGetHouseTypes : function(req, res, next) {
        houseType.find({}, {'_id' : 0}, function(err, houseTypes) {
            if(err) {
                return next(err);
            }
            res.json(houseTypes);
        });
    }
};