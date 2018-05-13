const router = require('express').Router();
const pool = require('../modules/pethotel.pool');

router.post('/owners', (req, res) => {
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

router.get('/owners', (req, res) => {
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

router.get('/count', (req, res) => {
    console.log('GET / route')
    const queryText = `SELECT "owners"."id", "owners"."owner_name",
    COUNT ("pets"."id") FROM "pets"
    RIGHT JOIN "owners" on "owners"."id" = "pets"."owner_id"
    GROUP BY "owners"."id", "owners"."owner_name";`;
    pool.query(queryText)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('Error making query', error);
            res.sendStatus(500);
        })
})

router.delete('/owners/:id', (req, res) => {
    const owner_id = req.params.id;
    let queryText = 'DELETE FROM "owners" WHERE "id" = $1';
    pool.query(queryText, [owner_id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    })
});


router.post('/pets', (req, res) => {
    console.log('POST / route')
    const pets = req.body;
    const queryText = `INSERT INTO "pets" ("pet_name", "pet_color", "pet_breed", "owner_id", "check_in")
                       VALUES($1, $2, $3, $4, $5)`;
    pool.query(queryText, [pets.pet_name, pets.pet_color, pets.pet_breed, pets.owner_id, pets.check_in])
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('Error making query', error);
            res.sendStatus(500);
        })

});

router.get('/pets', (req, res) => {
    console.log('GET / route');
    const queryText = `SELECT * FROM "pets"`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error making query', error);
            res.sendStatus(500);
        })
})

router.delete('/pets/:id', (req, res) => {
    const pet_id = req.params.id;
    let queryText = 'DELETE FROM "pets" WHERE "id" = $1';
    pool.query(queryText, [pet_id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error making query', error);
        res.sendStatus(500);
    })
});

router.put('/pets/:id', (req, res) => {
    console.log(req.body)
    const checkin_id = req.params.id;
    let queryText = `UPDATE "pets" SET "check_in" = $1 
                 WHERE "id" = $2`;
    pool.query(queryText, [req.body.check_in, checkin_id]).then((result) => {
        res.sendStatus(200);
    })
        .catch((error) => {
            console.log('Error making query', error);
            res.sendStatus(500);
        })
    });


    module.exports = router;

