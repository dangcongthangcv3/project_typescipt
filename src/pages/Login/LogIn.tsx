import React from 'react'
import clsx from 'clsx'
import styles from './login.module.scss'
import { NavLink } from 'react-router-dom'
type Props = {}

export default function LogIn({ }: Props) {
  return (
    <form className={styles.login}>
      <h3>Login</h3>
      <div className='col-3 pt-5 w-100'>
        <input className='form-control' placeholder='Email' id='email' />
      </div>
      <div className='col-3 pt-3 w-100'>
        <input className='form-control' placeholder='password' id='password' />
      </div>
      <div className={clsx('mt-3', styles.forgotpwd)}>
        <NavLink className='text-decoration-none' to={''}>Forgot Password</NavLink>
      </div>
      <div className={clsx('mt-3', styles.btnLogin)}>
        <button className={clsx('btn', 'btn-primary', styles.btnLogin)}>LOGIN</button>
      </div>
      <div className={clsx('mt-3','text-center')}>
      Already have an account?
        <NavLink className='text-decoration-none text-primary' to={'/register'}>Register</NavLink>
      </div>
      <div className={clsx('mt-3','text-center')}>
        <NavLink className={styles.icon} to={''}>
        <i className="fab fa-facebook-f"></i>
        </NavLink>
        <NavLink className={styles.icon} to={''}>
        <i className="fab fa-twitter"></i>
        </NavLink>
      </div>
    </form>
  )
}