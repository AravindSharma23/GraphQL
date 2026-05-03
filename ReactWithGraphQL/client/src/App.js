import './App.css';
import { useState } from 'react';
import {GET_TODOS} from './graphql/Query.js';
import { useQuery } from '@apollo/client/react';
import { AddTodos } from './components/AddTodos.js';
import Todo from './components/Todo.js';
function App() {
  const {loading,error,data} = useQuery(GET_TODOS);
  console.log("data",data)
  if(loading) return <p>{loading}</p>
  if(error) return <p>{error.message}</p>
  

  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData); // send to backend / GraphQL
  // };
  return (
    <div className="">
     <AddTodos/>
     {data.getTodos.map(todo=>(
      <Todo key={todo.id} id={todo.id} title={todo.title} detail = {todo.detail} date={todo.date}/>
     ))}
    </div>
  );
}

export default App;
