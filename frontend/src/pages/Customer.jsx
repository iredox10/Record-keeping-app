import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

export default function Customer() {
  const {id} = useParams()
  const [credits, setCredits] = useState([])
  const [customer, setCustomer] = useState('')
  useEffect(() =>{
    const fetchCredit = async () => {
      const res = await axios.get('http://localhost:4000/api/get-credits/' + id)
      setCredits(res.data.products)
      setCustomer(res.data)
    }
    fetchCredit()
  },[])

  return (
    <div>
      <Header text={`${customer.customerName} credits`} />
    {credits.length <= 0 ? <div>no credit</div>
      :
      credits.map(c => (
        <div className="shadow-lg md:flex" key={c._id}>
        <div>
            <p><span>product:</span>{c.productName}</p>
        </div>
        </div>
      ))    
    }

    </div>
  )
}
