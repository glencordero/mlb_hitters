export class Player {
    db
    
    constructor(db) {
        this.db = db
        this.init()
    }

    init() {
        const creation_string = `
            CREATE TABLE IF NOT EXISTS players(
            id INTEGER PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            hits INTEGER NOT NULL,
            hof INTEGER NOT NULL
            );`

        this.db.exec(creation_string)
    }
    
    findAll() {
        const statement = `SELECT * FROM players`
        return this.db.prepare(statement).all()
    }

    findByPK(id) {
        const statement = `SELECT * FROM players WHERE id = @id`
        return this.db.prepare(statement).get({id})    
    }

    remove(id) {
        const statement = `DELETE FROM players WHERE id = @id`
        this.db.prepare(statement).run({id})
    }

    add(name, hits, hof) {
        const statement = `INSERT INTO players(name, hits, hof) VALUES (@name, @hits, @hof)`
        this.db.prepare(statement).run({name, hits, hof})
    }
}