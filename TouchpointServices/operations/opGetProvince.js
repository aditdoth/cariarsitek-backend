/**
 * Created by Pradhany on 6/28/2016.
 */

var province = require('../models/province');

module.exports = {
    opGetProvinces : function(req, res, next) {
        province.find({}, {'_id' : 0}, function(err, province) {
            if(err) {
                return next(err);
            }
            res.json(province);
        });
    }
};