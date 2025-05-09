import {Pool} from "pg";


const pool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"chaschallenge",
    password: "123",
    port:5432
});


pool.connect()
    .then(client => {
        console.log("Ansluten till PostgreSQL-servern!");
        client.release();
    })
    .catch(err => {
        console.error("Kunde inte ansluta till PostgreSQL-servern:", err);
    });

export default pool;