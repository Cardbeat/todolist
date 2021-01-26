import React, { createContext, Dispatch, useReducer } from 'react'
import { TodoActions } from './types'
import { TodoReducer } from './reducer'

export interface ITodo {
    date: any;
    text: string;
    ativo: boolean
    _id?: string
}

export interface ITodos {
    todos: ITodo[];
    todo: ITodo;
}

const initialState: ITodos | null = {
    todos: [],
    todo: {
        date: new Date(),
        text: '',
        ativo: true,
    }
}

interface IContextProps {
    state: ITodos | null;
    dispatch: Dispatch<TodoActions>
}

export const TodoContext = createContext<IContextProps>({
    state: initialState,
    dispatch: () => null
})

const TodoProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(TodoReducer, initialState)

    return (
        <TodoContext.Provider value={{ state, dispatch }} >
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider