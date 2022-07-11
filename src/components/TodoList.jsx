import React from 'react'

const TodoList = ({title, description, deleteItem, index}) => {
  return <>
  <div className="todoList">
    <div>
        <p>{title}</p>
        <span>{description}</span>
    </div>
        <button  onClick={() => deleteItem(index)}>-</button>
  </div>
  </>
}

export default TodoList