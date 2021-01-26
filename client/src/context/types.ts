import { ITodo, ITodos } from ".";

export enum Types {
    Get = "GET_TODOS",
    New = "NEW_TODO",
}

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload?: any;
    }
};

type TodoPayload = {
    [Types.Get]: {
        state: ITodos
    },
    [Types.New]: {
        todo: Partial<ITodo>
    },
}


export type TodoActions = ActionMap<
    TodoPayload
>[keyof ActionMap<TodoPayload>];
