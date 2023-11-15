import { MagnifyingGlassIcon,  } from '@heroicons/react/24/solid'
import {  UserIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function NavBar() {
  return (
    <section className='py-2 px-10 justify-between flex text-base'>
        <div className='flex gap-6 items-center'>
            <div>Logo</div>
            <ul className='flex items-center gap-3 text-slate-600'>
                <li className='hover:text-red-500 cursor-pointer transition-all duration-150'>Home</li>
                <li className='hover:text-red-500 cursor-pointer transition-all duration-150'>About</li>
                <li className='hover:text-red-500 cursor-pointer transition-all duration-150'>Tours</li>
                <li className='hover:text-red-500 cursor-pointer transition-all duration-150'>Destination</li>
                <li className='hover:text-red-500 cursor-pointer transition-all duration-150'>Blog</li>
                <li className='hover:text-red-500 cursor-pointer transition-all duration-150'>Pages</li>
                <li className='hover:text-red-500 cursor-pointer transition-all duration-150'>Contact</li>
            </ul>
        </div>
        <div className='flex items-center'>
            <MagnifyingGlassIcon className='h-5 w-5 ' />
            <UserIcon className='h-5 w-5 ' />
            <p>Login / Signup</p>
        </div>
    </section>
  )
}
