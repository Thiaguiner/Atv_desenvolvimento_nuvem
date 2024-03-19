import express, { Router } from 'express'
import SellsController from '../controllers/sellsController'
const router = express.Router()

router
    .get('/sells', SellsController.getSells)
    .get('/sells/:id', SellsController.getSell)
    .post('/sells', SellsController.postSell)
    .put('/sells/:id', SellsController.updateSell)
    .delete('/sells/:id', SellsController.deleteSell)

export default router