import Login from './Components/Login';
import './App.css';
import { useState } from 'react';
import Reset from './Components/Reset';

function App() {
  const [form,SetForm]=useState('login');
  return (
    <div className='App'>
      <h1>Welcome!</h1>
      
      {form==="login" ? <Login /> : <Reset/>}
      <br />
      <button style={{height: "50px", width: "200px"}} onClick={()=>SetForm(form==="login" ? 'reset': 'login')}>
        {form==='login' ? "Forgot Password" : "Back to Login" }
      </button>

    </div>
  );
}

export default App;
