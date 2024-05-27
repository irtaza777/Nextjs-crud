import React from 'react'
import axios from 'axios';

const user = async() => {
    //const res=await fetch("https://jsonplaceholder.typicode.com/users");
    //const users= await res.json();
    const users= await axios.get("https://jsonplaceholder.typicode.com/users").then(res=>res.data)
 
    return (
    <div>
      {users.map(user=>
     <ul>
     <li key={user.id}>

      </li>
     
     <li>{user.name}</li></ul>)}
    </div>
  )
}

export default user
