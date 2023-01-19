import React, { useState } from 'react'

const ListForm = ({addList}) => {
  const [list, setList] = useState({title: "", desc: ""})

  const handleSubmit = (e) => {
    // stop from reloading, losing data from state
    // stop put the input in the url
    e.preventDefault()
    // add function, pass in the list im storing in state
    addList(list) 

    // clear out the form
    // set the state to initial state
    setList()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="title" // what is this input for
          value={list.title} // where are we storing the value
          // how we are storing the value, e is the event of typing in the input
          // storing the value into our state
            // storing all the fields that where already stored
            // title is what the user typed 
          onChange={(e) => setList({...list, title: e.target.value})}
          // make sure you fill it out before you submit
          placeholder="Title"
          required
        />
        <textarea
          name="desc"
          value={list.desc}
          onChange = {(e)=> setList({...list, desc: e.target.value})}
          placeholder="Description"
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default ListForm