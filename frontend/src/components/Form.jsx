import {Link} from "react-router-dom"
import {Button} from '../components/Button'
import Input from './Input'

function Form() {
  return (
    <>
    <div className="w-[60%] py-20 px-7">
    <form className="w-[50%] mx-auto p-2">
        <Input labelName='shopName' labelText='shop name' inputType='text' inputName='shopName' inputId='shopName' />
        <Input labelName='shopNumber' labelText='shop number' inputType='text' inputName='shopNumber' inputId='shopNumber' />
        <Input labelName='email' labelText='email' inputType='email' inputName='email' inputId='email' />
        <Input labelName='phoneNumber' labelText='phone number' inputType='number' inputName='phoneNumber' inputId='phoneNumber' />
        <Input labelName='address' labelText='address' inputType='text' inputName='address' inputId='address' />
        <Button name="register" />
        <p className="capitalize">already have an account? <a href="/">login</a> </p>
    </form>
    </div>
    </>
  )
}

export default Form