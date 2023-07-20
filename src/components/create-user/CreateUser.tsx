import linktreeLogo from '../../assets/linktree-logo.svg'
import './CreateUser.css'

import { useState, FormEvent } from 'react';
import { useAuth } from '../../authentication/Auth';
import { useNavigate } from 'react-router-dom';


export default function CreateUser (){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const createUser = useAuth().createUser;

  const submitCreateUser = async (e: FormEvent) => {
    e.preventDefault();
    console.log(email,password)
    await createUser(email,password)
    .then((value) => {
      console.log(value);
      sessionStorage.setItem('authToken', value)
      navigate('/')
    },(rejected) => console.error('sad'))
  }

  return (
    <div className='login-container'>
      <img src={linktreeLogo} className='logo' alt='logo'/>
      <div className='login'>
        <h1>Create your account</h1>
        <form onSubmit={submitCreateUser}className='login-form'>
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
          <button type='submit' className='login-button'>Create User</button>
        </form>
        <div> 
          <span>Already have an account? </span>
          <a href='/login'>Login</a>
        </div>
      </div>
    </div> 
  )
}
