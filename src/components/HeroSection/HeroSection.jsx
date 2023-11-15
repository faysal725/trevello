import React from 'react'
import LargeContainer from '../Container/LargeContainer'

export default function HeroSection() {


    const renderHeading = () => {
        return(
            <div className='text-white flex flex-col '>
                <p className='italic text-yellow-400 text-xl'>Explore the</p>
                <p className='text-5xl font-bold'>Travel & <br />Adventures</p>
                <p className='text-sm'>Find Awesome hotel, tour.</p>
            </div>
        )
    }


    const renderImageSection = () => {
        return(

            <div className='bg-slate-800 grid grid-cols-12'>
                <div className=' col-span-4'>
                    <img src="/images/hero/heroImg1.jpg" alt="" />
                </div>
                <div className=' col-span-8'>
                    sdfdsf
                </div>
            </div>
        )
    }
  return (
    <div className='bg-blue-900'>

        <LargeContainer>
            <div className='grid grid-cols-12 py-'>
                <div className='col-span-6'>
                    {renderHeading()}
                </div>

                <div className=' col-span-6'>
                    {renderImageSection()}
                </div>

            </div>
        </LargeContainer>
    </div>
  )
}
