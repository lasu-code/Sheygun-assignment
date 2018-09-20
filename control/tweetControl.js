// let userTweets=[
//     {
//         body:'my first tweet',
//         user:'heropaulexy',
//         date: new Date
//     },
//     {
//         body:'my second tweet',
//         user:'paulexy',
//         date: new Date
//     },
//     {
//         body:'my third tweet',
//         user:'heropaulexy',
//         date: new Date
//     },
// ]


exports.profile = function(req, res, next){
    res.render('profile', {title:req.params.name})
  };
  
exports.following = function(req, res, next){
    res.render('follow', {title: req.params.name});
  };