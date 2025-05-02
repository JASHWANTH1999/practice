import  { useFetchHooks } from './day3/customhooks.jsx'
import React from 'react'
import './App.css'
import { ListAndCondiotionalRendering } from './day-4/ConditionalRendenring.jsx';

function App() {
  const {data, loading, error}=useFetchHooks('https://jsonplaceholder.typicode.com/users')
  console.log(data);
  return (
    <>
   { error && <p>{error.message}</p>}
   {!loading && !error && <ul>{data.map((user,index)=>(
    <li key={index}>{user.name}</li>
    ))}</ul>
  }
      <p>jashwanth</p>
      <p>hello world</p>
      <ListAndCondiotionalRendering/>
    </>
  )
}

export default App
