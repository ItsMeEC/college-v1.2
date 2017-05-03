var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var colleges = [
        {
            College: 'Alabama A&M University',
            State: 'Alabama',
            Website: 'http://aamu.edu',
            read: false
        },
        {
            College: 'Alabama State University',
            State: 'Alabama',
            Website: 'http://bamastatesports.com',
            read: false
        },
        {
            College: 'Auburn University',
            State: 'Alabama',
            Website: 'http://auburn.edu',
            read: false
        },
        {
            College: 'Jacksonville State University',
            State: 'Alabama',
            Website: 'http://jsu.edu',
            read: false
        },
        {
            College: 'Samford University',
            State: 'Alabama',
            Website: 'http://samford.edu',
            read: false
        },
    ];

var router = function (nav) {

    adminRouter.route('/addColleges')
        .get(function (req, res) {
            var url =
                'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books,
                    function (err, results) {
                        res.send(results);
                        db.close();
                    }
                );

            });

            //res.send('inserting books');
        });

    return adminRouter;
};

module.exports = router;