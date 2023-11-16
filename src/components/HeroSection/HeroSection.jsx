import React from 'react'
import LargeContainer from '../Container/LargeContainer'
import heroImg1 from '../../images/hero/heroImg1.jpg'

export default function HeroSection() {


    const renderHeading = () => {
        return(
            <div className='text-white flex flex-col gap-2'>
                <p className='italic text-yellow-400 text-xl'>Explore the</p>
                <p className='text-5xl font-bold'>Travel & <br />Adventures</p>
                <p className='text-sm'>Find Awesome hotel, tour.</p>
            </div>
        )
    }


    const renderImageSection = () => {
        return(
            // style={{backgroundImage: 'url("path/to/your/image.jpg")'}}>
            // https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg?w=1380&t=st=1700065081~exp=1700065681~hmac=ec9dcf57ad57eb005b0a9df43e87e1db75f89dc92473368d14b0db8aca087e68
            <div className=' grid grid-cols-12 gap-5'>
                <div className='col-span-5  bg-[url("https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg?w=1380&t=st=1700065081~exp=1700065681~hmac=ec9dcf57ad57eb005b0a9df43e87e1db75f89dc92473368d14b0db8aca087e68")] bg-cover h-64 bg-center bg-contain bg-no-repeat' >
                </div>
                <div className=' col-span-7 bg-[url("https://img.freepik.com/free-photo/chair-table-dinning-beach-sea-with-blue-sky_74190-6094.jpg?w=1380&t=st=1700065081~exp=1700065681~hmac=ec9dcf57ad57eb005b0a9df43e87e1db75f89dc92473368d14b0db8aca087e68")] bg-cover  bg-center  bg-no-repeat' >
                    
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

