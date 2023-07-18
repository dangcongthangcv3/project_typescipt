import React from 'react'
import styles from './login.module.scss'
import clsx from 'clsx'
type Props = {}

export default function LogIn({}: Props) {
  return (
    <div>
      <h1 className={clsx(styles.red,styles.fs70)}>red</h1>
    </div>
  )
}