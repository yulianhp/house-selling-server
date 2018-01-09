var express = require('express');
var router = express.Router();
const houseadController = require('../controller/houseadController.js');


router.get('/', houseadController.getHouseAds)
router.post('/add', houseadController.addHouseAd)
router.delete('/delete/:id', houseadController.removeHouseAd)
router.put('/edit/:id', houseadController.updateHouseAd)

module.exports = router;
