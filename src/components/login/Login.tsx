import linktreeLogo from '../../assets/linktree-logo.svg'
import './Login.css'

import { useState } from 'react';
import firebase from 'firebase';
import { MouseEvent } from 'react';

function Login (){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = firebase.auth().signInWithEmailAndPassword;
  
  const submitLogin = (e: MouseEvent) => {
    console.log(email,password)
    e.preventDefault();
    signIn(email, password).then((userCredential: any)=> {
      // Signed in 
      const user = userCredential.user;
      console.log(userCredential)
    })
    .catch((error: Error) => {
      const errorMessage = error.message;
      console.error(errorMessage)
    });
  }

  return (
    <div className='login-container'>
      <img src={linktreeLogo} className='logo' alt='logo'/>
      <div className='login'>
        <h1>Log into your linktree</h1>
        <form className='login-form'>
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
          <button type='submit' className='login-button' onClick={submitLogin}>Log In</button>
        </form>
      </div>
    </div> 
  )
}

export default Login