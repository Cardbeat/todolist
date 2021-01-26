// controllers/bookController.ts
import { Router, Request, Response } from "express";
import { ITodo } from "../db/model/Todo";
import { createTodo, deleteTodo, findAll, updateTodo } from "../services/todoServices";

const todoRouter = Router();

// take all the todos
todoRouter.get('/todos', async (req: Request, res: Response) => {
    try {
        const response = await findAll();
        res.status(200).json({
            status: 200,
            message: 'Todos carregados com sucesso!',
            data: response === null ? [] : response
        })
    } catch (e) {
        res.status(500).json({
            status: 500,
            message: e
        })
    }
})

todoRouter.post('/todos', async (req: Request, res: Response) => {
    try {
        // service para criar um todo
        const response = await createTodo(req.body)
        console.log(req.body)
        res.status(200).json({
            status: 200,
            message: 'novo todo criado com sucesso!',
            data: response === null ? [] : response
        })
    } catch (e) {
        res.status(500).json({
            status: 500,
            message: e
        })
    }
})

todoRouter.put('/todos/:id', async (req: Request, res: Response) => {
    try {
        // service para editar um todo
        console.log(' vindo do client ', req.body)
        const response = await updateTodo(req.params.id, req.body)
        res.status(200).json({
            status: 200,
            message: 'todo atualizado com sucesso!',
            data: response === null ? [] : response
        })
    } catch (e) {
        res.status(500).json({
            status: 500,
            message: e
        })
    }
})

todoRouter.delete('/todos/:id', async (req: Request, res: Response) => {
    try {
        // service para deletar um todo
        const response = await deleteTodo(req.params.id)
        res.status(200).json({
            status: 200,
            message: 'todo deletado com sucesso!',
            data: response === null ? [] : response
        })
    } catch (e) {
        res.status(500).json({
            status: 500,
            message: e
        })
    }
})






export default todoRouter

