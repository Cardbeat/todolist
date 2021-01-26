import axios from 'axios'

// import { URLs, RestAPI } from '../util/Config.ts'


// montar DTO da volta 

export async function getAllTodos() {
    console.log('requisiçao de todos iniciada')
    try {
        let retorno = await axios.get('http://localhost:8080/api/todos')
        if (retorno && retorno.data) {
            return retorno.data.data
        }
        return []
    } catch (erro) {
        console.log('erro na requisiçao de todos, nao foi possivel completar a açao')
    }
}