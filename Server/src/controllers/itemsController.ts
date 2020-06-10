import { Request, Response } from 'express'
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response){
            const items = await knex('items').select('*');
        
            const serializedItems = items.map(item => {
                return {
                    id: item.id,
                    title: item.titulo,
                    image_url: `http://192.168.43.28:3333/uploads/${item.image}`,
                }
            }) // map percorre to
            
            //select * from items
        
            return response.json(serializedItems)
        }
} export default ItemsController