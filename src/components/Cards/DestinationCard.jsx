import React from 'react'

export default function DestinationCard({place, serial}) {
  return (
    <div  className='px-2  h-96 flex flex-col'>
        <img src={place.image} alt="" className={serial % 2 !== 0 ? 'h-56 object-cover mt-8' : 'h-56 object-cover '}/>
        
        <div className='pt-5 flex flex-col gap-1'>
        <p className='font-bold'>{place.name}</p>
        <p className='text-sm text-slate-500'>{place.qty}</p>
        </div>
  </div>
  )
}
