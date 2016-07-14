/**
 * Created by Pradhany on 6/23/2016.
 */

var express = require('express');
var router = express.Router();

var opGetBuildingWidth = require('../operations/opGetBuildingWidth');
var opGetHouseTypes = require('../operations/opGetHouseTypes');
var opGetProvince = require('../operations/opGetProvince');


router.get('/getHouseTypes', function(req, res, next) {
    opGetHouseTypes.opGetHouseTypes(req, res, next);
});

router.get('/getProvinces', function(req, res, next) {
    opGetProvince.opGetProvinces(req, res, next);
});

router.get('/getBuildingWidth', function(req, res, next) {
    opGetBuildingWidth.opGetBuildingWidth(req, res, next);
});

module.exports = router;