import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';

// Initialize the database and create the table if it doesn't exist
export const initializeDatabase = async (db) => {
    try {
        await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT UNIQUE,
                password TEXT
            );
              CREATE TABLE IF NOT EXISTS vehicles (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                placa TEXT UNIQUE,
                marca TEXT,
                fecFabricacion TEXT,
                color TEXT,
                costo REAL,
                activo BOOLEAN
            );

        `);
        console.log('Database initialized!');
    } catch (error) {
        console.log('Error while initializing the database: ', error);
    }
};
