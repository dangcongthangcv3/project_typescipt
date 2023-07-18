import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

export default function HomeTemplate({ }: Props) {
    return (
        <div>
            <head>
                as
            </head>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    )
}