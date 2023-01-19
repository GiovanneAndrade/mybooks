import pkg from 'pg';
var Pool = pkg.Pool;
var connection = new Pool({
    user: 'postgres',
    password: 'gege8102',
    host: 'localhost',
    port: 5432,
    database: 'linkr'
});
export default connection;
