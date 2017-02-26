const express = require('express');
const router = express.Router();

//const axios = require('axios');

//var Place = require('./server/models/place');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


//router.get('/list', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
//   axios.get(`${API}/list`)
//     .then(list => {
//       res.status(200).json(list.data);
//     })
//     .catch(error => {
//       res.status(500).send(error)
//     });
// Place.find({}, function(err, places) {
//   if (err) throw err;

//   // object of all the users
//   console.log(places);
// });
//});

module.exports = router;