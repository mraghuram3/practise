const express = require('express');
const router = express.Router();

var MongoClient = require('mongodb').MongoClient

//var Place = require('../models/place');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


router.get('/list', (req, res) => {
     MongoClient.connect('mongodb://raghu:balaji@ds161069.mlab.com:61069/dump', function (err, db) {
  if (err) throw err

  db.collection('nearyby').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
    db.close();
     var obj=({data: result});
     var body = JSON.stringify(obj);
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Content-Type", "application/json");
    res.send(body);
  })
})
});

router.get('/count', (req, res) => {
     MongoClient.connect('mongodb://raghu:balaji@ds161069.mlab.com:61069/dump', function (err, db) {
  if (err) throw err
  
  db.collection('nearyby').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result);
    var collection = db.collection( 'nearyby' );
  collection.count({  },	  
	  function(err, result) {
        console.log(result);
        var obj=({data: result});
        var body = JSON.stringify(obj);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Content-Type", "application/json");
         res.send(body);
	  }
  );
    
  })
})
});


module.exports = router;