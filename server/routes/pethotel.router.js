const router= require('express').Router();
const pool = require('../modules/pethotel.pool');

router.post('/', (req, res) => {
    console.log('POST / route')
    const owners = req.body; 
    const queryText = `INSERT INTO "owners" ("owner_name")
                       VALUES($1)`;
    pool.query(queryText, [owners.owner_name])
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    })
})

router.get('/', (req, res) => {
    console.log('GET / route');
    const queryText = `SELECT "owner_name" FROM "owners"`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    })
})

module.exports = router;

