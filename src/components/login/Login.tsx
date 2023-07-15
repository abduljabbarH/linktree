import linktreeLogo from '../../assets/linktree-logo.svg'
import './Login.css'

function Login (){


  return (
    <div className='login-container'>
      <img src={linktreeLogo} className='logo' alt='logo'/>
      <div className='login'>
        <h1>Log into your linktree</h1>
        <form className='login-form'>
          <input className='input' type="text" name="username" placeholder='username' />
          <input className='input' type="password" name="password" placeholder='password'/>
          <button className='login-button'>Log In</button>
        </form>
      </div>
    </div> 
  )
}

export default Login