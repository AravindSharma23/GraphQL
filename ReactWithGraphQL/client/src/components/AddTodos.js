import {useMutation} from '@apollo/client/react';
import React,{useState} from 'react';
import { ADD_TODO  } from '../graphql/Mutation.js';
import { GET_TODOS } from '../graphql/Query.js';

export const AddTodos = ()=>{
    const [todo,setTodo] = useState({
        title :'',
        detail :'',
        date :''
    })
     
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setTodo(prev=>({...prev,[name]:value}))
    }
    

    const [addTodo] = useMutation(ADD_TODO);

    const onSubmit = (e)=>{
        e.preventDefault();
        addTodo({
            variables:{
                title : todo.title,
                detail : todo.detail,
                date : todo.date
            },refetchQueries : [
                {query : GET_TODOS}
            ]
        })
    }
    return(
         <div className="container mt-5">
            {JSON.stringify(todo,null,'\t')}
      <div className="card p-4 shadow">
        <h3 className="mb-4">Add Todo</h3>

        <form onSubmit={onSubmit}>
          {/* Title */}
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={todo.title}
              onChange={handleChange}
              placeholder="Enter title"
              required
            />
          </div>

          {/* Detail */}
          <div className="mb-3">
            <label className="form-label">Detail</label>
            <textarea
              className="form-control"
              name="detail"
              value={todo.detail}
              onChange={handleChange}
              placeholder="Enter details"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Date */}
          <div className="mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={todo.date}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-100">
            Add Todo
          </button>
        </form>
      </div>
    </div>
    )
}