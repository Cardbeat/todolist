import Todo, { ITodo } from "../db/model/Todo";

export const findAll = async () => {
    try {
        const response = await Todo.find({});
        return response
    } catch (e) {
        return e
    }
};


export const createTodo = async (todo: ITodo) => {
    const newTodo = new Todo(todo)
    try {
        const response = await newTodo.save()
        return response
    } catch (e) {
        throw e
    }
}

export const updateTodo = async (id: string, todo: ITodo) => {

    try {
        const changeTodo = await Todo.findById(id)

        console.log(todo)
        changeTodo.text = todo.text;
        changeTodo.ativo = todo.ativo;
        changeTodo.date = todo.date

        const response = await changeTodo.save();
        return response
    } catch (e) {
        throw e
    }

}

export const deleteTodo = async (id: string) => {

    try {
        const response = await Todo.remove({ _id: id })
        return response
    } catch (e) {
        throw e
    }

}