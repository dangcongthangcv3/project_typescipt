import React from 'react'
import LogIn from '../../pages/Login/LogIn'
import { Outlet } from 'react-router-dom'
import UserLeft from '../../Component/UserLeft/UserLeft'
type Props = {}

export default function UserTemplate({ }: Props) {
    return (
        <div className='row'>
            <div className='col-md-6'>
                <UserLeft />
            </div>
            <div className='col-md-6'>
                <Outlet />
            </div>
        </div>
    )
}