import React from 'react'
import './Register.css'

function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label htmlFor='name'>Name</label>
        <input type='text'/>
        
        <label htmlFor='email'>Email</label>
        <input type='email'/>

        <label htmlFor='password'>Password</label>
        <input type='password'/>

        <label htmlFor='confirm password'>Confirm Password</label>
        <input type='password'/>

        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register