/**
 * Created by Pradhany on 6/28/2016.
 */

var buildingWidth = require('../models/buildingWidth');

module.exports = {
    opGetBuildingWidth : function (req, res, next) {
        buildingWidth.find({}, {'_id' : 0}, function(err, buildingWidth) {
            if(err) {
                next.send(err);
            }
            res.json(buildingWidth);
        });
    }
};