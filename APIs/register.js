const MongoClient = require('mongodb').MongoClient;

exports.Register = (req, res, next) => {
    console.log(req.body)
    MongoClient.connect('mongodb://localhost:27017/belajar', (err, db) =>{
        if (err) throw err;
        db.db().collection('users').insertOne(
            {
                full_name: req.body.full_name,
                email: req.body.email,
                password: req.body.password,
                telephone: req.body.telephone
            }
        ).then(succed => {
            // console.log('user berhasil dibuat', succed)
            res.status(200).json({
                status: 'ok',
                message: 'user berhasil dibuat'
            });

        }).catch(err => {
            // console.log('erUpdate', err)
            res.status(500).json({
                status: 'error',
                message: `user gagal dibuat ${err}`
            });
        })
    });
}