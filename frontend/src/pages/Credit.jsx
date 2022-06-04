import React from 'react'
import { useParams } from 'react-router-dom'

export default function Credit() {
    const {id} = useParams()
  return (

    <div>Credit {id}</div>
  )
}
