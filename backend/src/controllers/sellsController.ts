import { Request, Response } from 'express';
import Sells from '../models/sellModel';

class SellsController{
    
    static getSells = async(req: Request, res: Response) => {
        try {
            const sells = await Sells.find()
            .populate('seller')
            .populate('buyer')
            .populate('book')
            
            res.status(200).json(sells)
        } catch (error) {
            throw new Error('sells not find')
        }
    }

    static getSell = async(req: Request, res: Response) => {
        try {
            const id = req.params.id
            const sell = await Sells.findById(id)
                .populate('seller')
                .populate('buyer')
            res.status(200).json(sell)
        } catch (error) {
            throw new Error('sell not find')
        }
    }

    static postSell = async(req: Request, res: Response) => {
        try {
            const {book, seller, buyer} = await req.body
            const sell = new Sells({book, seller, buyer})
            sell.save();
            res.status(201).json(sell)
        } catch (error) {
            throw new Error('sell could not be created');
        }
    }

    static updateSell = async(req: Request, res: Response) => {
        try {
            const { id } = req.params
            const {book, seller, buyer} = await req.body
            const sell = await Sells.findByIdAndUpdate(id, {book, seller, buyer})
            res.status(201).json({
                message: "venda atualizado com sucesso",
                sell: {book, seller, buyer}
            })
        } catch (error) {
            throw new Error('sell could not be updated');
        }
    }

    static deleteSell = async(req: Request, res: Response) => {
        try {
            const id = req.params.id
            const sell = await Sells.findByIdAndDelete(id)
            res.status(200).json(sell)
        } catch (error) {
            res.status(404);
            throw new Error('sell not find')
        }
    }

    
}

export default SellsController;