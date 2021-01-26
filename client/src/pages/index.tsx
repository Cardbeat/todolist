import { Container, createStyles, Grid, makeStyles, Paper, Theme } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react'
import { getAllTodos } from '../api/services/getAllTodos';
import TodoCalendar from '../components/Home/Calendar'
import Todo from '../components/Home/Todo'
import { TodoContext } from '../context';
import { Types } from '../context/types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        item: {
            minWidth: 600,
            minHeight: 600
        },
        display: {
            background: 'skyblue',
            height: '100vh'
        },
        title: {
            fontSize: '2rem',
            marginRight: 20
        },
        paper: {
            width: '95%',
            margin: ' 0 auto'
        }


    }),
);

const Home = () => {
    const classes = useStyles();
    const { state, dispatch } = React.useContext(TodoContext)
    const [loading, setLoading] = useState(true)

    // useEffect pra dar fetch na api e regar a aplicaçao 

    const getTodos = useCallback(async () => {
        const todos = await getAllTodos()
        dispatch({ type: Types.Get, payload: todos })
        setLoading(false)
    }, [])


    useEffect(() => {
        getTodos()
    }, [getTodos])

    return (
        <div className={classes.display}>
            <div className={classes.title}> TodoList </div>
            {loading ? <div>''</div> :
                <Paper className={classes.paper}>
                    <Grid container justify="space-around">
                        <Grid item className={classes.item}> <TodoCalendar /> </Grid>
                        <Grid item className={classes.item}> <Todo /></Grid>
                    </Grid>
                </Paper>
            }
        </div>
    )
}

export default Home