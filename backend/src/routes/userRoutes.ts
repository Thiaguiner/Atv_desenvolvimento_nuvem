import express from 'express'
import UsersController from '../controllers/usersController'
const router = express.Router()

router
    .get('/users', UsersController.getUsers)
    .get('/users/:id', UsersController.getUser)
    .post('/users', UsersController.postUser)
    .post('/users/login', UsersController.login)
    .put('/users/:id', UsersController.updateUser)
    .delete('/users/:id', UsersController.deleteUser)

export default router