const HouseAd = require('../models/housead.js');

class HouseAdController {
  static getHouseAds(req,res){
    HouseAd.find().then(function(data){
      res.status(200)
      .json({
        message: 'Get all houseads',
        dataHouseAds: data
      })
    })
  }
  
  // static getHouseAdsByUserId(req, res){
  //   HouseAd.findOne(
  //     {}
  //   )
  // }
  
  static addHouseAd(req,res){
    let housead = new HouseAd(req.body)
    housead.save().then(function(data){
      res.status(200)
      .json({
        message: 'HouseAd added',
        dataHouseAd: data
      })
    }).catch(function(err){
      res.status(400)
      .json({
        message: 'Error create housead',
        error: err
      })
    })
  }
  
  static removeHouseAd(req,res){
    HouseAd.findByIdAndRemove(req.params.id).then(function(data){
      res.status(200)
      .json({
        message: 'HouseAd removed',
        dataHouseAds: data
      })
    }).catch(function(err){
      res.status(400)
      .json({
        message: 'Ada error removeHouseAd',
        error: err
      })
    })
  }
  
  static updateHouseAd(req,res){
    HouseAd.findById(req.params.id).then(function(data){
      data.userId = req.body.userId || data.userId,
      data.description = req.body.description || data.description,
      data.status = req.body.status || data.status
      
      data.save().then(function(data){
        res.status(200)
        .json({
          message: 'HouseAd updated',
          dataBook: data
        })
      }).catch(function(err){
        res.status(400)
        .json({
          message: 'Error update housead',
          error: err
        })
      })
    })
  }
  
}

module.exports = HouseAdController;