import { useEffect, useState } from "react";

function Login(){
  const [email,SetEmail]=useState('');
  const [password,SetPassword]=useState('');

  useEffect(()=>{
    let email=localStorage.getItem('email');
    // console.log(email);
    if(email){
      SetEmail(email);
    }
},[]);
 
 
useEffect(()=>{

  localStorage.setItem('email',email);

},[email]); 

  

    return (
        <>
          <h1>Login </h1>
          <br/>
          <input placeholder="Enter email" value={email} onChange={(e)=>SetEmail(e.target.value)}/>
          <br/>
          <input type="password" placeholder="Enter password" onChange={(e)=>SetPassword(e.target.value)}/>
          <br/>
          <button>Login</button>
        </>
    )
}
export default Login;