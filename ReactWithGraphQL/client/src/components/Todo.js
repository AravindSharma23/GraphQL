import React from 'react'
import moment from 'moment'
import { useMutation } from '@apollo/client/react'
import { DELETE_TODO } from '../graphql/Mutation.js'
import { GET_TODOS } from '../graphql/Query.js'
const Todo = ({id,title,detail,date}) => {
    const [deleteTodo] = useMutation(DELETE_TODO);
    const removeTodo = (id)=>{
        deleteTodo({
            variables :{
                id:id
            },refetchQueries :[{query:GET_TODOS}]
        })
        
    }
  return (
    <div>
      <p>{title}</p>
      <p>{detail}</p>
      <p>{moment(date).format("MMMM DD YY")}</p>
      <p onClick={()=>removeTodo(id)} className=''>Delete Todo</p>
    </div>
  )
}

export default Todo
