import React from 'react'
type Props = {}

export default function LogIn({ }: Props) {
  return (
    <form>
      <h3 className='textCenter'>Login</h3>
      <div className='col-3'>
        <label htmlFor='email'> Email</label>
        <i className="fa-regular fa-envelope"></i>
        <input className='form-control' placeholder='Email' id='email' />
      </div>
      <div className='col-3'>
        <label htmlFor='password'> Password</label>
        <input className='form-control' placeholder='password' id='password' />
      </div>
    </form>
  )
}