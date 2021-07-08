import React, {createContext, useReducer} from "react";
import {todosReducer} from "../reducers/todosReducer";

export const TodoListContext = createContext(); // Context oluşturuldu.

const TodoListContextProvider = ({children}) => {

    const [todos, dispatch] = useReducer(todosReducer, [ 
       {text : "Go for shopping for dinner", id : 1},
       {text : "Go for a cinema", id:2},
       {text : "Go for a walk", id:3},
    ]);


    return(
        <TodoListContext.Provider value={{todos, dispatch }}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider;