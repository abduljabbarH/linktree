import linktreeLogo from '../../assets/linktree-logo.svg'
import './Login.css'

import { useState, SyntheticEvent, FormEvent } from 'react';
import { useAuth } from '../../authentication/Auth';
import { Form, useNavigate } from 'react-router-dom';


function Login (){
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useAuth().login;

  const submitLogin = async (e: FormEvent) => {
    e.preventDefault();
    await login(email,password).then((value) => {
      console.log(value);
      sessionStorage.setItem('authToken', value)
      navigate('/')
    },(rejected) => console.error('sad'))
  }

  return (
    <div className='login-container'>
      <img src={linktreeLogo} className='logo' alt='logo'/>
      <div className='login'>
        <h1>Log into your linktree</h1>
        <form onSubmit={submitLogin}className='login-form'>
          <input 
            className='input' 
            type="text" 
            name="email" 
            placeholder='email' 
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />
          <input 
            className='input' 
            type="password" 
            name="password" 
            placeholder='password'
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />
          <button type='submit' className='login-button'>Log In</button>
        </form>
        <div> 
          <span>Dont have an account? </span>
          <a href='/create-user'>Sign Up</a>
        </div>
      </div>
    </div> 
  )
}

export default Login