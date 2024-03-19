import express from 'express'
import BooksController from '../controllers/booksController'
const router = express.Router()

router
    .get('/books', BooksController.getBooks)
    .get('/books/:id', BooksController.getBook)
    .post('/books', BooksController.postBook)
    .put('/books/:id', BooksController.updateBook)
    .delete('/books/:id', BooksController.deleteBook)

export default router