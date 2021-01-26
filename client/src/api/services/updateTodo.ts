import axios from 'axios'
import { ITodo } from '../../context'


export async function updateTodo(id: string, newTodo: ITodo) {
    console.log('atualizaçao de todo iniciada')
    try {
        let retorno = await axios.put('http://localhost:8080/api/todos/' + id, newTodo)
        if (retorno && retorno.data) {
            console.log('todo atualizado com sucesso')
        }
        return []
    } catch (erro) {
        console.log('erro na atualizaçao de todo, nao foi possivel completar a açao')
    }
}