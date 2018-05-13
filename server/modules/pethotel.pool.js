const pg = require('pg');
const url = require('url');
let config = {};

if (process.env.DATABASE_URL) {
    let params = url.parse(process.env.DATABASE_URL);
    let auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true,
        max: 10,
        idleTimeoutMillis: 30000,
    };
} else {
    config = {
        host: 'localhost',
        database: 'pet_hotel',
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000
    }
}
console.log(config);

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log('Postgres connected');
})

pool.on('error', (error) => {
    console.log('Error with Postgres', error)
})

module.exports = pool;