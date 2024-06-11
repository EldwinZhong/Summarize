const sql = require('./db');

async function fetchData() {
    try {
      const users = await sql`SELECT * FROM users`;
      console.log('Users:', users);
      console.log('User 1:', users[0]);
      console.log('User 2 username:', users[1].username);
      return users
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }
  
module.exports = {
    fetchData
}