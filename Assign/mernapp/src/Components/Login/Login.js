import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>

        <label htmlFor='email'>Email</label>
        <input type='email'/>

        <label htmlFor='password'>Password</label>
        <input type='password'/>

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login