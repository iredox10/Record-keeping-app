import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from './Button'

export default function Header({text}) {
  const Navigate = useNavigate()
  return (
    <div>
        <div className="bg-blue-700 p-4 text-white md:p-8 capitalize">
            <h1 className="md:font-bold md:text-2xl ">{text} </h1>
        </div>
        <div className="flex">
          <NavLink to={'/'}>
          <Button name='home' />
          </NavLink>
        </div>
    </div>
  )
}
