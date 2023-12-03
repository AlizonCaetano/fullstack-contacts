import { Request, Response } from 'express'

export class UserController {
    async create(req: Request, res: Response) {
        const { name, cpf, telefone, email} = req.body

        return res.status(200).json({ name, cpf, telefone, email})
    }
}