import React, { useEffect, useState } from 'react'
import axios from 'axios';

// in charge of all of our CRUD actions, display the components that make up the list page
const Lists = () => {
  // storing all our list items in our frontend
  const [lists, setLists] = useState([])

  // useEffect - run the code before I display on the screen
  useEffect(() => {
    // run my index action in my controller
    // return all our list from db
    axios.get('/api/lists')
      .then(res => setLists(res.data)) // grab all the list from our db and store within our state
      .catch(err => console.log(err)) // console log err
  }, [])

  // Add Action, pass in a list object
  const addList = (list) => {
    // run the create action within controller
    // { list: { title: 'Grocery', desc: 'Food for the week' } }
    axios.post('/api/lists', { list })
    .then(res =>{
      setLists([...lists, res.data])
    })
    .catch(err => console.log(err))
  }


  return (
    <>
    </>
  )
}

export default Lists