import { useState } from 'react'
import axios from 'axios'
import { Button } from '../components/Button'
import Input from '../components/Input'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Login() {
  const [shopName, setShopName] = useState('')
  const [password, setPassword] = useState('')
  const Navigate = useNavigate()

  const handleLogIn = async (e) =>{
    e.preventDefault()
      const res = await axios.post('http://localhost:4000/api/log-in',{shopName,password})
      const userId = res.data._id
      console.log(res.data._id);
      Navigate('/user-page/' + userId)
  }
  return (
    <div>
        <div className="flex justify-between min-h-[100vh]">
            
            <div className="w-[60%] py-36 px-7">
            <form onSubmit={handleLogIn} className="w-[50%] mx-auto p-2">
                <Input labelName='shopName' labelText='shop name' inputType='text' inputName='shopName' inputId='shopName' state={(e) => setShopName(e.target.value)} />
                <Input labelName='password' labelText='password' inputType='password' inputName='password' inputId='password' state={(e) => setPassword(e.target.value)}/>
                <Button name='login' />
                <p>you don't have an account <NavLink to='/'>Register</NavLink> </p>
            </form>
            </div>
        </div>
    </div>
  )
}
