import postgres from 'postgres';
import connection from "./connection";
import { TCard } from 'src/types';


//singleton

class DB {

    private static instance: DB
    connection: postgres.Sql<{}>

    private constructor (connection: postgres.Sql<{}>) {
        this.connection = connection
    }

    public static getInstance(): DB {
        if (!DB.instance) {
            DB.instance = new DB(connection);
        }

        return DB.instance;
    }

    async getTasks(limits: number, offset: number) {

        try {
            
            const data = await connection`select * from tasks limit ${limits} offset ${offset}`

            return data

        } catch (error) {
            console.log(error);
            
        }
    }

    async createTask(card: Pick<TCard, "username" | "mail" | "message">){

        try {
            const data = await connection`
            insert into
            tasks
            (username, mail, message)
            values
            (${card.username}, ${card.mail}, ${card.message})
            returning *
            `
            return data
        } catch (error) {
            console.log(error)
        }
    }   

    async updateTask(card: Pick<TCard, "id" | "message" | "isDone">){

        const updates = {}

        Object.entries(card)
        .filter(item => item[0] !== 'id')
        .forEach(item => updates[item[0].toLowerCase()] = item[1])
        
        
        try {
            
            const data = await connection`
            update tasks set ${connection(updates)}
            where
            id = ${card.id}
            returning *
            `
            return data

        } catch (error) {
            console.log(error);
        }
    }

    async getTaskAmount(){

        try {
            
            const data = await connection`select count (*) from tasks`
            return data

        } catch (error) {
            console.log(error);
        }

    }
}

export default DB