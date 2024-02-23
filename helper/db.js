const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

export async function openDB() {
    return sqlite.open({
        filename: './db/sakila_master.db',
        driver: sqlite3.Database
    })
}