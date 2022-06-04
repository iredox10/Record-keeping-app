import {useState} from 'react'
export default function Input({labelName,labelText, inputType,inputName, inputId, state}) {

  return (
    <div>
        <div className="mb-3 w-full">
            <label htmlFor={labelName} className="text-blue-700 capitalize mb-2 block ">{labelText}</label>
            <input type={inputType} className="border-2 block w-full border-blue-700 p-1  " name={inputName} id={inputId}  onChange= {state} />
        </div>
    </div>
  )
}
