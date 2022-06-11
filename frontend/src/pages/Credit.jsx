import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import Header from '../components/Header'

export default function Credit() {
    const {id} = useParams()
    const [customers, setCustomers] = useState([])
    useEffect(() =>{
      const fetchUser = async () =>{
        const res = await axios.get('http://localhost:4000/api/get-customers/' + id)
        setCustomers(res.data.customers)
      }
      fetchUser()
    },[customers,id])

  return (

    <div>
      <Header text={`your credit page`} />
      <div className="md:flex justify-center gap-2 items-center mt-5">
    {customers.map(c => (
      <div className="shadow-lg capitalize p-2" key={c._id}>
        <h1 className='font-bold text-center'>customer detail</h1>
        <p><span>customer name:</span> {c.customerName}</p>
        <NavLink to={`/customer-credits/${c._id}`}>
        <Button name={'view credits'} />
        </NavLink>
      </div>
    )) }
    </div>
    </div>
  )
}
