import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'

const Todo = () => {
  const initial = localStorage.getItem("items")? JSON.parse(localStorage.getItem("items")):[];
  const [items, setItems] = useState(initial);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); 

  const submitHandler = (e) => {
    e.preventDefault();
    setItems([...items, {title,description}])
    setTitle("")
    setDescription("");
  }

const deleteItem = (index)=> {
  const arr = items.filter((val,i) =>{
    return i !== index;
  })
  setItems(arr);
}

useEffect(()=> {
  localStorage.setItem("items", JSON.stringify(items))
},[items]);
  return <>
   <div className="container">
    <h1>To-Do List</h1>
    <form onSubmit={submitHandler}>
      <input type="text" placeholder='Title' value={title} onChange= {(e)=> setTitle(e.target.value)} />
      <textarea name="description" placeholder='Description' value={description} onChange= {(e)=> setDescription(e.target.value)}></textarea>
      <button type="submit">ADD</button>
    </form>

    {items.map((element, index)=> (
      <TodoList key={index} title={element.title} description={element.description} deleteItem={deleteItem} index={index} />

    ))}
   </div>
  </>
}

export default Todo