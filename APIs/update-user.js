const MongoClient = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectID,
    bcrypt = require("bcrypt");

exports.UpdateUser = (req, res, next) => {
    MongoClient.connect('mongodb://localhost:27017/belajar', (err, db) =>{
        if (err) throw err;
        db.db().collection('users').updateOne({_id: ObjectId(req.body._id)}, {$set: {
            full_name: req.body.full_name,
            password: bcrypt.hashSync(req.body.password, 8)
        }}).then(updated => {
            res.status(200).json({
                status: 'ok',
                message: 'sukses update user'
            });
        }).catch(err => {
            res.status(200).json({
                status: 'ok',
                message: `Gagal update ${err}`
            });
        })
    });
}