import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoListContext } from "../contexts/TodoListContext";


// class TodoList extends React.Component {

//     static contextType = ThemeContext; //Kullanmak istediğimiz context'i tanımladık. 

//     render() {

//         const {isDarkTheme, lightTheme, darkTheme, changeTheme} = this.context;
//         const theme = isDarkTheme ? darkTheme : lightTheme;
//         return(
//             <div style={{background:theme.background, color:theme.text, height :"140px", textAlign : "center"}}>
//                 <p className="item">Plan the family trip</p>
//                 <p className="item">Go for shopping for dinner</p>
//                 <p className="item">Go for a walk</p>    
//                 <button className="ui primary button" onClick={changeTheme}>Change the Theme</button>
//             </div>
//         )
//     }
// }

// useContext hook'u ile yapımı

const TodoList = () => {

    const [todo,setTodo] = useState(""); //addTodo'ya yollamak için state oluşturuldu.

    const {isDarkTheme, lightTheme, darkTheme, changeTheme} = useContext(ThemeContext); 
    const {todos, dispatch} = useContext(TodoListContext);

    const theme = isDarkTheme ? darkTheme : lightTheme;

    const handleChange = e => {
        setTodo(e.target.value);       
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch({type :"ADD_TODO", text: todo});
       
    }

    const handleRemoveTodo = (e) => {

        const id = e.target.id;
        dispatch({type:"REMOVE_TODO", id})
    }

    return(
        <div style={{background:theme.background, color:theme.text, textAlign : "center"}}>
            {
                todos.length ? (
                    todos.map(todo => {
                        return  <p key={todo.id} id={todo.id} onClick={handleRemoveTodo} className="item">{todo.text}</p>
                    })
                ) : (
                    <div>You have no todos</div>
                )
            }
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="todo">Add todo:</label>
                <input type="text" id="todo" onChange={handleChange}></input>
                <input type="submit" value="Add new todo" className="ui button primary" style={{marginRight : "4px"}}></input>
                <button className="ui primary button" onClick={changeTheme}>Change the Theme</button>
            </form>          
        </div>
    )
}

export default TodoList;