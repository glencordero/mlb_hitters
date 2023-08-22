import Database from 'better-sqlite3'
import {Player} from './player'

const database = new Database('documents.db', {verbose: console.log})

export const models = {
    Player: new Player(database)
}

