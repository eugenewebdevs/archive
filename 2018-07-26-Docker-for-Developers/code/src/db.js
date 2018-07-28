'use strict';

const pg = require('pg');

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env var is required');
}

const pool = new pg.Pool({connectionString: process.env.DATABASE_URL});
pool.on('error', (err, client) => {
  console.error('Error with database connectioon', err);
});

exports.incCount = async function(host) {
  const client = await pool.connect();
  try {
    let sql = 'INSERT INTO counter (host, value) VALUES ($1, $2) ON CONFLICT (host) DO UPDATE SET value = counter.value + 1 RETURNING value';
    return await client.query(sql, [host, 1]);
  } finally {
    console.log('release');
    client.release();
  }
}






