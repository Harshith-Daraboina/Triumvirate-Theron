import { Client } from 'pg';

const run = async () => {
  const client = new Client({
    connectionString: "postgresql://neondb_owner:npg_8gNDEihVX5lI@ep-rough-snow-a8myr5vx-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    
    await client.connect();
    console.log('Connected to PostgreSQL');

    // const result = await client.query(`
    //   INSERT INTO TODOSCHEMA.users (username, password, email)
    //   VALUES ('testuser', 'testpassword', 'test@example.com')
    // `);
    const result = await client.query(`
      SELECT * FROM TODOSCHEMA.users
    `);

    console.log('Query executed:', result.rows);
  












} catch (err) {
    console.error(' Error:', err);
  } finally {
    await client.end();
  }
};

run();
