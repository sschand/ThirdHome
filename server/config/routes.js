var users = require('../controllers/users.js');
var charities = require('../controllers/charities.js');

module.exports = function(app){

    // Get all users/businesses
    app.post('/getUsers', function(req, res){
        console.log("Getting users");
        users.index(req, res)
    });

    // Add new user/business
    app.post('/create', function(req, res){
        users.create(req, res)
    });

    app.get('/companies', function(req, res){
        users.finddonations(req, res)
    });
    app.get('/charities', function(req, res){
        charities.getAll(req, res)
    });

    app.post('/newDonation', function(req, res){
      charities.newDonation(req, res)
    });


  // app.get('/users/getall', function(req, res){
  //   console.log("Getting stuff");
  //   users.index(req, res)
  // });

  // app.post('/adduser', function(req, res){
  //   console.log("Routes,", req);
  //   users.create(req, res);
  // });




}
