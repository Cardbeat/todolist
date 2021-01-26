import { makeStyles, Theme, createStyles } from '@material-ui/core';
import React, { useContext } from 'react'
import { TodoContext } from '../../../context'
import TodoComponent from '../TodoComponent'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        todoBox: {
            height: 400,
            overflowY: 'auto'
        },
        notFound: {
            textAlign: 'center',
            marginTop: 20
        }
    }),
);

const TodoList = () => {
    const classes = useStyles()
    const { state, dispatch } = useContext(TodoContext)
    return (
        <>
            {
                state && state?.todos.length > 0 ?
                    <div className={classes.todoBox}>
                        {
                            state?.todos.slice(0).reverse().map((todo, index: number) => {
                                return (
                                    <TodoComponent
                                        key={index}
                                        id={todo._id}
                                        text={todo.text}
                                        date={todo.date}
                                        ativo={todo.ativo}>
                                    </TodoComponent>
                                )
                            })
                        }
                    </div> : <div className={classes.notFound}>Nenhuma tarefa encontrada</div>
            }
        </>
    )
}

export default TodoList