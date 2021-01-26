import { Container, Grid } from '@material-ui/core';
import React, { useContext, useEffect } from 'react'
import TodoList from '../TodoList';
import NewTodo from '../NewTodo';
import { TodoContext } from '../../../context';

const Todo = () => {
    const { state, dispatch } = useContext(TodoContext)


    useEffect(() => {
        console.log(state?.todo.date)
    }, [])
    return (
        <Container>

            <Grid container direction="column">
                <Grid item>
                    < NewTodo />
                </Grid>
                <Grid item>
                    < TodoList />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Todo;
