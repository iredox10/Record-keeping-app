import React from 'react'
import Form from '../components/Form'
export default function home() {
  return (
    <div>
        <div className="flex justify-between min-h-[100vh]">
            <div className="bg-blue-700 text-center text-white capitalize py-40 px-7 flex-grow">
                <h1 className=" text-6xl font-bold">welcome to <span className="block">record keeping</span></h1>
                <p className="mt-2">where you can add record of your business and track how much you're making for free</p>
            </div>
            <Form />
        </div>
    </div>
  )
}
