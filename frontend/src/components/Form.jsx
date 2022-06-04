import {NavLink, useNavigate} from "react-router-dom"
import {Button} from '../components/Button'
import Input from './Input'
import Axios from 'axios'
import { useState,useEffect } from "react"


function Form() {
  const [shopName, setShopName] = useState('')
  const [shopNumber, setShopNumber] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [data,setData] = useState([])
  const Navigate = useNavigate()
  const addUser = async (e) =>{
    e.preventDefault()
    try {
      const res = await Axios.post('http://localhost:4000/api/register',{shopName,shopNumber,address,phoneNumber,email,password})
      // setData(res.data.newUser)
      console.log(res.data.newUser._id)
      let userId = res.data.newUser._id
      Navigate('/user-page/'+ userId)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    <div className="w-[60%] py-20 px-7">
    <form className="w-[50%] mx-auto p-2" onSubmit={addUser}>
      {address}
        <Input labelName='shopName' labelText='shop name' inputType='text' inputName='shopName' inputId='shopName' state ={(e) => setShopName(e.target.value)} />
        <Input labelName='shopNumber' labelText='shop number' inputType='text' inputName='shopNumber' inputId='shopNumber' state ={(e) => setShopNumber(e.target.value)}/>
        <Input labelName='email' labelText='email' inputType='email' inputName='email' inputId='email' state ={(e) => setEmail(e.target.value)} />
        <Input labelName='phoneNumber' labelText='phone number' inputType='number' inputName='phoneNumber' inputId='phoneNumber' state ={(e) => setPhoneNumber(e.target.value)} />
        <Input labelName='address' labelText='address' inputType='text' inputName='address' inputId='address' state ={(e) => setAddress(e.target.value)} />
        <Input labelName='password' labelText='password' inputType='password' inputName='password' inputId='password' state ={(e) => setPassword(e.target.value)} />
        <Button name="register" />
        <p className="capitalize">already have an account? <NavLink to='/log-in'>login</NavLink> </p>
    </form>
    </div>
    </>
  )
}

export default Form