import { Checkbox, createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import { ITodo, TodoContext } from '../../../context'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { deleteTodo } from '../../../api/services/deleteTodo';
import { getAllTodos } from '../../../api/services/getAllTodos';
import { Types } from '../../../context/types';
import { updateTodo } from '../../../api/services/updateTodo';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            position: 'relative',
            top: 10
        },
        data: {
            float: 'right',
            position: 'relative',
            bottom: 10
        },
        cardDisplayActive: {

        },
        cardDisplay: {
            background: 'white'
        },
        cardTodo: {
            margin: 10,
        },
        edit: {
            marginRight: 8,
            cursor: 'pointer'
        },
        remove: {
            marginLeft: 8,
            cursor: 'pointer'
        }
    }),
);

export interface TodoProps extends ITodo {
    id: string
}


const TodoComponent = ({ text, ativo, date, id }: TodoProps | any) => {
    const [checked, setChecked] = React.useState(ativo);
    const { state, dispatch } = useContext(TodoContext)

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        const changeCheck = await updateTodo(id, { date: date, ativo: !checked, text: text })
        if (changeCheck) {
            const getTodos = await getAllTodos()
            dispatch({ type: Types.Get, payload: getTodos })
        }
    };

    const classes = useStyles();

    useEffect(() => {
        console.log(date)
    }, [])




    const handleDelete = async () => {
        const retorno = await deleteTodo(id)
        if (retorno) {
            const getTodos = await getAllTodos()
            dispatch({ type: Types.Get, payload: getTodos })
        }
    }



    return (
        <div >
            <div className={classes.cardTodo}>
                <Card>
                    <CardContent>

                        <Grid container justify="space-between">
                            <Grid item>
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </Grid>
                            <Grid className={classes.text} item>{text}</Grid>
                            <Grid item>
                                <Grid item className={classes.remove} onClick={handleDelete}><DeleteIcon /></Grid>
                            </Grid>
                        </Grid>
                        <div className={classes.data}>{new Date(date).toLocaleDateString('pt-BR')}</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default TodoComponent