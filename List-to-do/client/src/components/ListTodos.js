import React, {Fragment, useState, useEffect} from "react";
import EditTodo from "./EditTodo";

const ListTodos = () =>{
    const [todos, setTodos] = useState([]);
    

    // delete todo fumction
     async function deleteTodo(id){
        try {
             
            const res = await fetch('https://localhost:5000/todos/$', {id} ,{method: "DELETE"} );
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message)
        }
     }

    async function getTodos(){
        const res = await fetch("http://localhost:5000/todos");

        const todoArray = await res.json();
        setTodos(todoArray);
    }

    useEffect(()=> {
        getTodos();
    },[]);
      
    
    return (
      <Fragment>
        {" "}
        <table class="table mt-5">
         <thead>
          <tr>
            <td>Description</td>
            <td>Edit</td>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
           {/* <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>mdo</td>
           </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>fat</td>
          </tr> */}

          {
            todos.map(todo =>{
                <tr key = {todo.todo_id}>
                    <td>{todo.description}</td>
                    <td> <EditTodo todo = {todo} /></td>
                    <td><button className="btn btn-danger" onClick={ ()=> deleteTodo(todo.todo_id)}>Delete</button></td>
                </tr>
            })
          }
         </tbody>
        </table>
      </Fragment>
    );
}

 export default ListTodos;
