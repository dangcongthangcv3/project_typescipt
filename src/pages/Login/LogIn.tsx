import React from 'react'
import styles from './login.module.scss'
import clsx from 'clsx'
type Props = {}

export default function LogIn({ }: Props) {
  return (
    <div className={styles.login}>
      <div className={styles.layout}>
        <div className='row'>
          <div className={clsx(styles.left, 'col-md-6')}>
          </div>
          <form className='col-md-6'>
            a
          </form>

        </div>
      </div>
    </div>
  )
}