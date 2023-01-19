 
import pkg  from 'pg';
 

const { Pool } = pkg; 
 
const connection = new Pool({
  user: 'postgres',
  password: 'gege8102',
  host: 'localhost',
  port: 5432,
  database: 'books',
});



 
export default connection