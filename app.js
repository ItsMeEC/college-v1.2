var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var port = process.env.PORT || 3000;
var nav = [{
  Links: 'colleges',
  Text: 'Colleges'
}, {
  Links: '/contact',
  Text: 'Contact'
}];

var bookRouter = require('./src/routes/colRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('a'));

app.use(session({
  secret: 'library'
}));

require('./src/config/passport')(app);
app.use(express.static(__dirname + '/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');
//app.use(express.static(__dirname + '/src/views'));


app.use('/colleges', colRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

app.get('/', function(req, res) {
  res.render('index', {
    title: "hello i am here",
    nav: nav
  });
});

app.get('/colleges', function(req, res) {
  res.send('colleges');
});

app.listen(port, function(err) {
  console.log('running');
});