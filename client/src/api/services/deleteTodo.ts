import axios from 'axios'


export async function deleteTodo(id: string) {
    console.log('remoçao de todo iniciada')
    try {
        let retorno = await axios.delete('http://localhost:8080/api/todos/' + id)
        if (retorno) {
            console.log('todo removido com sucesso')
            return true
        }
        return false
    } catch (erro) {
        console.log('erro na remoçao de todo, nao foi possivel completar a açao')
    }
}