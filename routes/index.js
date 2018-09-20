var express = require('express');
var router = express.Router();
const tweetController = require('../control/tweetControl');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/follow/:name', tweetController.following);
router.get('/profile/:name', tweetController.profile);



// router.get('/:name',function(req, res, next){
//   res.render('profile', {title:'my tweets',username:req.params.name})
// });

// router.get('/follow/:name',function(req, res, next){
//   res.render('follow', {title:req.params.name})
// });
module.exports = router;