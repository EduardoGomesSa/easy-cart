import * as SQLite from 'expo-sqlite';

// const db = await SQLite.openDatabaseAsync('easy_cart.db')

export class ShopRepository {
    private db: SQLite.SQLiteDatabase
    constructor(db: SQLite.SQLiteDatabase) {
        this.db = db
    }

    static async create(): Promise<ShopRepository> {
        const db = await SQLite.openDatabaseAsync('easy_cart.db');
        const repo = new ShopRepository(db)
        await repo.initialize();
        return repo;
    }

    private async initialize() {
        const tx = this.db.createSessionAsync()
    }
}