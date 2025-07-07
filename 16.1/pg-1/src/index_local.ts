import {Client} from 'pg';

const pgClient = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'mypass',
    database: 'postgres',
});

const main = async () => {
    await pgClient.connect();
    console.log('Connected to PostgreSQL');

    const result = await pgClient.query(`
        SELECT * FROM TODOSCHEMA.users;
    `);
    console.log('Query executed:', result.rows);

};

main();