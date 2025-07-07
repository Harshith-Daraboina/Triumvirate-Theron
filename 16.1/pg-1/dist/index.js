"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = new pg_1.Client({
        connectionString: "postgresql://neondb_owner:npg_8gNDEihVX5lI@ep-rough-snow-a8myr5vx-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
        ssl: {
            rejectUnauthorized: false
        }
    });
    try {
        yield client.connect();
        console.log('Connected to PostgreSQL');
        // const result = await client.query(`
        //   INSERT INTO TODOSCHEMA.users (username, password, email)
        //   VALUES ('testuser', 'testpassword', 'test@example.com')
        // `);
        const result = yield client.query(`
      SELECT * FROM TODOSCHEMA.users
    `);
        console.log('Query executed:', result.rows);
    }
    catch (err) {
        console.error(' Error:', err);
    }
    finally {
        yield client.end();
    }
});
run();
