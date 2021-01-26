import axios from 'axios'
import { ITodo } from '../../context'


export async function createTodo(newTodo: ITodo) {
    console.log('requisiçao de todos iniciada')
    try {
        let retorno = await axios.post('http://localhost:8080/api/todos', newTodo)
        if (retorno && retorno.data) {
            console.log('todo criado com sucesso')
        }
        return []
    } catch (erro) {
        console.log('erro na criaçao de todo, nao foi possivel completar a açao')
    }
}