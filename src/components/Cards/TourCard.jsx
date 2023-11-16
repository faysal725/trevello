import React from 'react'
import { BeakerIcon, BuildingOfficeIcon, ChevronRightIcon, StarIcon,  } from '@heroicons/react/24/solid'

export default function TourCard({placeInfo, serial}) {
  return (
    <div className='w-fit flex flex-col'>
        <div className='max-w-[200px] h-56'>
            <img className='w-full h-full' src={placeInfo.image} alt="" />
        </div>
        <div className='bg-white border-t p-2'>
            <p className='text-xs  text-slate-500'>{placeInfo.country}</p>
            <p className='text-sm  text-slate-700 font-bold'>{placeInfo.title}</p>
            <div className='flex items-center gap-2'>
                <button className='flex items-center text-xs gap-x-1 bg-yellow-400 px-1 rounded-md'>
                    <StarIcon className='h-2 w-2 text-black' />{placeInfo.rating}
                </button>
                <p className='text-xs  text-slate-500'>{placeInfo.review} reviews</p>
                <p className='text-xs  text-slate-500'>{placeInfo.days}</p>
            </div>
        </div>
    </div>
  )
}
