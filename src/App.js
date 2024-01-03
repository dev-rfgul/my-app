import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './App.css';


const App = () => {
  const [users, setusers] = useState([])
  const getUser = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    const data = response.data;
    console.log(data);
    setusers(data);

  }
  getUser();
  return (
    <div>
      <button onClick={getUser} className='button'>Get Data</button>
      <div className='data'>

        {<ul> {users.map((e) => {
          return <li>{e.name} ---<a>Explore</a></li>
        })}</ul>}
      </div>

    </div>
  )
}

export default App