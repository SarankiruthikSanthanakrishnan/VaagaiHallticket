const mysql = require('mysql2/promise');
const fs = require('fs');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  charset: 'utf8mb4',
  ssl: {
    ca: process.env.MYSQL_CA,
  },
});

async function testDB() {
  try {
    await db.query('SELECT 1');
    console.log('MySQL Connected Successfully (Aiven Cloud)');
  } catch (err) {
    console.log('MySQL Connection Failed:', err.message);
  }
}

testDB();

module.exports = db;
