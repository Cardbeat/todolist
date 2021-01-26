
import { ITodos } from ".";
import { TodoActions, Types } from "./types";


// types do payload
export const TodoReducer = (
    state: ITodos,
    action: TodoActions
) => {
    switch (action.type) {
        case Types.New:
            return {
                ...state,
                todo: action.payload
            }
        case Types.Get:
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state;
    }
};
