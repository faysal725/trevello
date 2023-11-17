import { Bars3Icon, MagnifyingGlassIcon, PaperAirplaneIcon,  } from '@heroicons/react/24/solid'
import {  UserIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Logo from '../../shared/Logo'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigateTo = useNavigate()
  const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'About', href: '#', current: false },
    { name: 'Tours', href: '#', current: false },
    { name: 'Destination', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
    { name: 'Pages', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
  ]
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <section className='py-2 px-10 justify-between flex text-base'>
        <div className='flex gap-6 items-center grow'>
            <Bars3Icon className='h-5 w-5 md:hidden cursor-pointer' onClick={() => setOpenSidebar(true)}/>
            <Logo />
            <ul className=' items-center gap-3 text-slate-600 md:flex hidden'>
              {
                navigation.map((item, index) => (
                    <li key={index} className='hover:text-red-500 cursor-pointer transition-all duration-150'>{item.name}</li>
                ))
              }
            </ul>
        </div>
        <div className='flex items-center gap-2'>
            <MagnifyingGlassIcon className='h-5 w-5 ' />
            <UserIcon className='h-5 w-5 ' />
            <div className='flex gap-1 text-slate-800'>
              <button onClick={() => navigateTo('/login')} className='hover:text-blue-800 font-medium'>Login</button>
              /
              <button onClick={() => navigateTo('/signup')} className='hover:text-blue-800 font-medium'>Signup</button>
            </div>
        </div>

        {
          openSidebar ? <Sidebar shouldOpen={(bool) => setOpenSidebar(bool) } currentState={openSidebar}/>
          : 
          <></>
        }
        
    </section>
  )
}
