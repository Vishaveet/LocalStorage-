import { useEffect, useState } from "react";

function Reset(){
  const [email,SetEmail]=useState('');

  useEffect(()=>{
      let email=localStorage.getItem('email');
      if(email){
        SetEmail(email);
      }
  },[])
  
  useEffect(()=>{

    localStorage.setItem('email',email);

  },[email]); 

    return (
        <>
          <h1>Reset password</h1>
          <br/>
          <input value={email} placeholder="Enter email" onChange={(e)=>SetEmail(e.target.value)}/>
          <br/>
          <button>Reset</button>
        </>
    )
}
export default Reset;