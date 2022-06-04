import Header from "../components/Header";
import { NavLink, useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from "axios";

export default function UserPage() {
  const {id} = useParams()
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState('loading')

  const fetchUser = async () =>{
    const res = await axios.get('http://localhost:4000/api/get-user/' + id)
    setUser(res.data)
    setLoading(null)
  }
  useEffect(() =>{
    fetchUser()
  },[user])

  return (
    <div>
        <Header text={`welcome to your page ${user.shopName}`}/>
        {loading && <p>loading data please wait....</p>}
        {user && <div className="flex items-center min-h-screen justify-center gap-10 p-2">
        <NavLink to={`/manage-transaction/${user._id}`}>
            <div className="border-2">
                <p>manage transaction</p>
                <p>manage your transactions here</p>
            </div>
            </NavLink>
            <NavLink to={`/manage-credit/${user._id}`}>
            <div className="border-2">
                <p>manage credit</p>
                <p>manage your credit here</p>
            </div>
            </NavLink>
        </div>
      }
    </div>
  )
}
