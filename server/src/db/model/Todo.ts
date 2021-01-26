import { model, Schema, Document } from 'mongoose'

export interface ITodo extends Document {
    date: Date;
    text: string;
    ativo: boolean;
}

const TodoSchema: Schema = new Schema({
    date: { type: String, required: false },
    text: { type: String, required: false },
    ativo: { type: Boolean, default: false }
})

const Todo = model<ITodo>('Todo', TodoSchema)

export default Todo

