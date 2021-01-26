import { makeStyles, Theme, createStyles, Grid, Button } from '@material-ui/core';
import React, { useContext } from 'react'
import TextField from '@material-ui/core/TextField';
import { TodoContext } from '../../../context';
import { Types } from '../../../context/types';
import { createTodo } from '../../../api/services/createTodo';
import { getAllTodos } from '../../../api/services/getAllTodos';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        data: {
            color: 'black'
        },
        displayBox: {
            marginTop: 30
        },
        anotar: {
            marginTop: 10,
            width: 400,
            background: 'skyblue',
            color: 'black',
            margin: '0 auto',
            display: 'grid',
            justifyContent: 'center'

        }
    }),
);

const NewTodo = () => {
    const classes = useStyles();
    const { state, dispatch } = useContext(TodoContext)

    const handleClick = async () => {
        if (state && state?.todo) {
            const newTodo = await createTodo(state?.todo)

            if (newTodo) {
                const getTodos = await getAllTodos()
                dispatch({ type: Types.Get, payload: getTodos })
                dispatch({ type: Types.New, payload: { ...state.todo, text: '', ativo: false } })
            }
        }

    }
    return (
        <div>
            <form className={classes.displayBox} noValidate autoComplete="off">
                <Grid container direction="column" spacing={1}>
                    <Grid item >
                        <TextField
                            className={classes.data}
                            value={state?.todo.date.toLocaleDateString('pt-Br')}
                            id="date"
                            label="Quando?"
                            disabled
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            value={state?.todo.text}
                            onChange={(event) => dispatch({ type: Types.New, payload: { ...state?.todo, text: event.target.value } })}
                            id="newTodo"
                            label="O que preciso fazer?"
                            fullWidth
                        />
                    </Grid>
                </Grid>


                <Button className={classes.anotar} onClick={handleClick}>
                    Anotar
                </Button>
            </form>
        </div>
    )
}

export default NewTodo