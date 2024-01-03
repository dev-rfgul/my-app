import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";

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
          return <li>{e.name} --- <Link>xyz</Link></li>
        })}</ul>}
      </div>

    </div>
  )
}

export default App