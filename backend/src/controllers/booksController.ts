import { Request, Response } from 'express';
import { crypt, isCorrect } from '../utils/encript';
import Books from '../models/booksModel';

class BooksController{
    
    static getBooks = async(req: Request, res: Response) => {
        try {
            const books = await Books.find()
            .populate('seller')
            
            res.status(200).json(books)
        } catch (error) {
            throw new Error('books not find')
        }
    }

    static getBook = async(req: Request, res: Response) => {
        try {
            const id = req.params.id
            const book = await Books.findById(id)
                .populate('seller')
            res.status(200).json(book)
        } catch (error) {
            throw new Error('book not find')
        }
    }

    static postBook = async(req: Request, res: Response) => {
        try {
            const {name, price, gender, seller} = await req.body
            const book = new Books({name, price, gender, seller})
            book.save();
            res.status(201).json(book)
        } catch (error) {
            throw new Error('book could not be created');
        }
    }

    static updateBook = async(req: Request, res: Response) => {
        try {
            const { id } = req.params
            const {name, price, gender} = await req.body
            const book = await Books.findByIdAndUpdate(id, {name, price, gender})
            res.status(201).json({
                message: "livro atualizado com sucesso",
                book: {
                    name,
                    price,
                    gender
                }
            })
        } catch (error) {
            throw new Error('book could not be updated');
        }
    }

    static deleteBook = async(req: Request, res: Response) => {
        try {
            const id = req.params.id
            const user = await Books.findByIdAndDelete(id)
            res.status(200).json(user)
        } catch (error) {
            res.status(404);
            throw new Error('book not find')
        }
    }

    
}

export default BooksController;