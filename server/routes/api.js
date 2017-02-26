const express = require('express');
const router = express.Router();

var MongoClient = require('mongodb').MongoClient

var Place = require('../models/place');

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
    res.send(result);
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
        
         res.send("count:"+result);
	  }
  );
    
  })
})
});
var simpleCount = function(db, callback) {
  var collection = db.collection( 'nearyby' );
  collection.count({  },	  
	  function(err, result) {
        console.log(result)
        callback(result);
      }
  );
}

module.exports = router;