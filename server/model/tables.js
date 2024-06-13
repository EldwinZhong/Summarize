const sql = require('../db');

async function createTables() {
  try {
    await sql
    `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('User table created successfully.');
  } catch (err) {
    console.error('Error creating user table:', err);
  }
}
createTables();