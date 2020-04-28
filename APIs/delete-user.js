const MongoClient = require('mongodb').MongoClient,
    ObjectId = require('mongodb').ObjectID;

exports.DeleteUser = (req, res, next) => {
    MongoClient.connect('mongodb://localhost:27017/belajar', (err, db) =>{
        if (err) throw err;
        db.db().collection('users').deleteOne({_id: ObjectId(req.params.user_id)})
        .then(deleted => {
            if (deleted.deletedCount) {
                res.status(200).json({
                    status: 'ok',
                    message: 'sukses delete user'
                });
            } else {
                res.status(200).json({
                    status: 'ok',
                    message: 'user tidak ditemukan'
                });
            }
        }).catch(err => {
            res.status(500).json({
                status: 'ok',
                message: `gagal delete user ${err}`
            });
        })
    });
}