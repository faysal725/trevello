import React from 'react'
import { BeakerIcon, BuildingOfficeIcon, ChevronRightIcon, StarIcon  } from '@heroicons/react/24/solid'
import { HeartIcon  } from '@heroicons/react/24/outline'

export default function TourCard({placeInfo, serial}) {
  return (
    <div className='w-fit flex flex-col'>
        <div className='max-w-[300px] h-56 relative'>
            <img className='w-full h-full' src={placeInfo.image} alt="" />
            <button className='absolute top-4 right-4 border border-slate-500 rounded-full p-2 hover:scale-110 transition-all duration-150 cursor-pointer'> <HeartIcon className='h-5 w-5 text-slate-600' /></button>
        </div>
        <div className='flex flex-col gap-y-1 bg-white border-t p-3'>
            <p className='text-xs  text-slate-500'>{placeInfo.country}</p>
            <p className='text-sm  text-slate-700 font-bold'>{placeInfo.title}</p>
            <div className='flex items-center gap-2'>
                <button className='flex items-center text-xs gap-x-1 bg-yellow-400 px-1 rounded-md'>
                    <StarIcon className='h-2 w-2 text-black' />{placeInfo.rating}
                </button>
                <p className='text-xs  text-slate-500'>{placeInfo.review} reviews</p>
                <p className='text-xs  text-slate-500   ml-auto'>{placeInfo.days}</p>
            </div>
            <div className='flex justify-between items-center pt-2'>
                <p className='text-xs  text-slate-500'>Starting from</p>
                <p className='text-lg  text-slate-800 font-bold italic'>${placeInfo.price}</p>
                {/* <button> <HeartIcon className='h-5 w-5 text-' /> d</button> */}
            </div>
        </div>
    </div>
  )
}
