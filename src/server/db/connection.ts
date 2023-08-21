import 'dotenv/config'
import postgres from "postgres"

console.log(process.env.DB_PORT)

const connection = postgres({ 
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
})

export default connection