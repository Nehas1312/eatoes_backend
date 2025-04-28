import { Pool } from 'pg';


const pool = new Pool({
  connectionString: process.env.DATABASE_URL, 
  ssl: {
    rejectUnauthorized: false, 
  },
});


const connectPostgres = async () => {
  try {
    await pool.connect();
    console.log('PostgreSQL connected');
  } catch (err) {
    console.error('PostgreSQL connection error:', err);
  }
};

export { pool, connectPostgres };  
