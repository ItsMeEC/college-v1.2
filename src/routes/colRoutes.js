var express = require('express');

var colRouter = express.Router();
var router = function(nav) {
 
  colRouter.use(function(req, res, next) {
    if (!req.user) {
      res.redirect('/');
    }
    next();
  });
  colRouter.route('/')
    .get(function(req, res) {
      res.render('colListView', {
        title: "Alabama A&M University",
        nav: nav,
        college: colleges
      });
    });

  colRouter.route('/:id')
    .get(function(req, res) {
      var id = req.params.id;
      res.render('colView', {
        College: "Alabama A&M University",
        nav: nav,
        college: colleges[id]
      });
    });

  return colRouter;
};


module.exports = router;