// import { Pool } from "pg";
const { Pool } = require("pg")

let localPoolConfig = {
    user: 'postgres',
    password: 'P@kist@n1947',
    host: 'localhost',
    port: '5432',
    database: 'jwtdatabase'
}
const poolConfig = process.env.DATABASE_URL ? {
    connectionString: process.env.DATABASE_URL, ssl:
        { rejectUnauthorized: false },
} : localPoolConfig

const pool = new Pool(poolConfig)

module.exports = pool;