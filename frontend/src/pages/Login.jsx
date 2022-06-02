import { Button } from '../components/Button'
import Input from '../components/Input'
export default function Login() {
  return (
    <div>
        <div className="flex justify-between min-h-[100vh]">
            
            <div className="w-[60%] py-36 px-7">
            <form className="w-[50%] mx-auto p-2">
                <Input labelName='shopName' labelText='shop name' inputType='text' inputName='shopName' inputId='shopName' />
                <Input labelName='password' labelText='password' inputType='password' inputName='password' inputId='password' />
                <Button name='login' />
                <p>you don't have an account <a href="/">Register</a></p>
            </form>
            </div>
        </div>
    </div>
  )
}
