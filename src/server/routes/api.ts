import { Router, Request, Response, query } from 'express'
import { TypedRequest, TCard, TQuery } from 'src/types'
import { checkSchema, validationResult } from 'express-validator'
import { createCardValidScheme, getCardValidScheme, updateCardValidScheme } from '../utils/validatorSchemas'
import DB from '../db/db'

const db = DB.getInstance()
const api = Router()

api
.get('/tasks', async (req: TypedRequest<Required<TQuery>, unknown>, res: Response) => {
    
    //change default value
    const limits = req.query?.limits ? parseInt(req.query.limits) : 0
    const offset = req.query?.offset ? parseInt(req.query.offset) : 0

    try {
        
        const data = {}

        const amount = await db.getTaskAmount()
        
        const cards = await db.getTasks(limits, offset)
        
        data.cards = cards
        data.count = amount[0].count

        console.log(data)
        

        res.status(200).json(data)

    } catch (error) {
       
        console.log(error)
        
    }
    

    
})
.post('/tasks',
checkSchema(createCardValidScheme),
async (req: TypedRequest<typeof query, Pick<TCard, "username" | "mail" | "message">>, res: Response) => {
    
    const result = validationResult(req)

    if(result.isEmpty()){
        const data = await db.createTask(req.body)
        console.log(data)
        return res.status(200).send(data)
    }

    res.status(400).send("Bad request")
})
.put('/tasks',
checkSchema(updateCardValidScheme), 
async (req: TypedRequest<typeof query, Pick<TCard, "id" | "message" | "isDone">>, res: Response) => {
    
    const result = validationResult(req)

    if(result.isEmpty()){
        
        console.log(req.body);
        const data = await db.updateTask(req.body)
        console.log(data)
        return res.status(200).send(data)
    }

    res.status(400).send("Bad request")
})

export default api