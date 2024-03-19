import { Request, Response } from 'express';
import { crypt, isCorrect } from '../utils/encript';
import Users from '../models/userModel';

class UsersController{
    
    static getUsers = async(req: Request, res: Response) => {
        try {
            const users = await Users.find();
            res.status(200).json(users)
        } catch (error) {
            throw new Error('users not find')
        }
    }

    static getUser = async(req: Request, res: Response) => {
        try {
            const id = req.params.id
            const user = await Users.findById(id);
            res.status(200).json(user)
        } catch (error) {
            res.status(404);
            throw new Error('user not find')
        }
    }

    static postUser = async(req: Request, res: Response) => {
        try {
            const {name, email, isAdmin, password} = await req.body
            const dbPassword = await crypt(password);
            const user = new Users({name, email, isAdmin, password: dbPassword})
            user.save();
            res.status(201).json(user)
        } catch (error) {
            throw new Error('user could not be created');
        }
    }

    static updateUser = async(req: Request, res: Response) => {
        try {
            const { id } = req.params
            const {name, email, isAdmin} = await req.body
            let password = await req.body.password
            if (password){
                const dbPassword = await crypt(password);
                password = dbPassword
            }
            
            const user = await Users.findByIdAndUpdate(id, {name, email, isAdmin, password})
            res.status(201).json({
                message: "usuário atualizado com sucesso",
                user: {
                    name,
                    email,
                    isAdmin
                }
            })
        } catch (error) {
            throw new Error('user could not be created');
        }
    }

    static deleteUser = async(req: Request, res: Response) => {
        try {
            const id = req.params.id
            const user = await Users.findByIdAndDelete(id)
            res.status(200).json(user)
        } catch (error) {
            res.status(404);
            throw new Error('user not find')
        }
    }

    static login = async(req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            if ( !email || !password){
                throw ("falta email ou senha")
            }
            const dbUser = await Users.findOne({email}).exec();
            console.log(dbUser)
            if(dbUser){
                const passwordIsCorrect = await isCorrect(password, dbUser.password);
                passwordIsCorrect 
                ? res.status(200).json({
                    login: true
                })
                : res.status(401).json({
                    login: false
                })
                
            }else{
                res.status(401).json({
                    login: false
                })
            }
        } catch (error) {
            res.status(401).json({
                login: false
            })
        }
    }

    
}

export default UsersController;