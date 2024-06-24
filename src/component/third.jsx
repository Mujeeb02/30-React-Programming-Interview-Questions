import React, { useState } from 'react'
//take input from user and show it in realtime...
const UserForm = () => {
    const[data,setData]=useState();
    const changeHandler=(e)=>{
        setData(e.target.value);
    }
    
  return (
    <div>
      <form onChange={changeHandler}>
        <label htmlFor="">
            Enter your name
            <input type="text" name="" id="" />
        </label>
        <p>your name is : {data}</p>
      </form>
    </div>
  )
}

export default UserForm
