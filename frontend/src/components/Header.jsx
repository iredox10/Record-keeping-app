import React from 'react'

export default function Header({text}) {
  return (
    <div>
        <div className="bg-blue-700 p-4 text-white md:p-8 capitalize">
            <h1 className="md:font-bold md:text-2xl ">{text} </h1>
        </div>
    </div>
  )
}
