const MongoClient = require('mongodb').MongoClient;

exports.List = (req, res, next) => {
    MongoClient.connect('mongodb://localhost:27017/belajar', (err, db) =>{
        if (err) throw err;
        db.db().collection('users').find({}).toArray(function(err, result) {
            if (err) throw err;
            res.status(200).json({
                status: 'ok',
                data: result
            });
        })
    });
    
}