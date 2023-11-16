import React from 'react'

export default function InputBox({label="any", changeInput, placeholder="any", title, Icon}) {

  return (
    <div className='relative'>
        {/* input box  */}
        <label htmlFor={label} className="">
        {title}
        </label>
        <input
        type="text"
        name={label}
        id={label}
        onChange={(e) => changeInput(e.target.value)}
        autoComplete="email"
        required
        className="w-full min-w-0 text-black appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full pl-10"
        placeholder={placeholder}
        />
        {
            Icon ? <Icon className="h-5 w-5 absolute top-2 left-3 text-slate-600" /> : <></>
        }
        
    </div>
  )
}
