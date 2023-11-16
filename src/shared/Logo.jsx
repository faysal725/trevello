import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function Logo({textCol = "text-black"}) {
  return (
    <div className={'mx-auto md:mx-0 flex items-center '+textCol}>
        <PaperAirplaneIcon className='h-5 w-5 text-blue-800' />
        <p className='font-bold italic'>Travello</p>
    </div>
  )
}
