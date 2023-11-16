import React from 'react'

export default function Large(props) {
  return (
    <div className=' max-w-6xl mx-auto px-10 md:px-0 text '>
        
        {props.children}
    </div>
  )
}
