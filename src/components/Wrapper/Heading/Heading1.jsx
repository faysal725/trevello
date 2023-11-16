import React from 'react'
import LargeContainer from '../Container/LargeContainer'


export default function Heading1({heading="example", title="title"  ,children, shouldWhite}) {
  return (
    <LargeContainer>
        
    <div className='py-5 '>
      <div className='flex justify-center flex-col items-center gap-1 '>
        <p className={shouldWhite ? 'font-bold italic text-white':'font-bold italic text-blue-900'}>{title}</p>
        <p  className={shouldWhite ? 'text-4xl font-bold text-white':'text-4xl font-bold text-black'}>{heading}</p>
      </div>

      <div className='py-10 '>
        {children} 
      </div>
    </div>
  </LargeContainer>
  )
}
