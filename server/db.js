async function connect() {
    if (global.connection) {
        console.log('Already connected to the database');
        return global.connection.connect();
    }
    const {Pool} = require('pg');
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING,
    });
    

    const client = await pool.connect();
    console.log('Connected to the database');

    const res = await client.query('SELECT NOW()');
    console.log('Current time:', res.rows[0].now);

    //return the client to the pool after use
    client.release();

    global.connection = pool; // Store the pool in a global variable for later use
    return pool.connect();
}

connect();

async function SelectAllUsers() {
    const client = await connect();
    const res = await client.query('SELECT * FROM users');
    client.release();
    return res.rows;
}