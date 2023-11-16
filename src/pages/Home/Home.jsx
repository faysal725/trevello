import React from 'react'
import { BeakerIcon, BuildingOfficeIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import HeroSection from '../../components/HeroSection/HeroSection'
import {  PaperAirplaneIcon, FlagIcon, CalendarIcon, UsersIcon } from '@heroicons/react/24/outline'
import InputBox from '../../shared/InputBox'
import ButtonPrimary from '../../shared/ButtonPrimary'
import LargeContainer from '../../components/Wrapper/Container/LargeContainer'
import Heading1 from '../../components/Wrapper/Heading/Heading1'
import CarouselComponent from '../../shared/CarouselComponent'
import CardCarousel from '../../shared/CardCarousel'
import DestinationCard from '../../components/Cards/DestinationCard'
import TourCard from '../../components/Cards/TourCard'

export default function Home() {

  const tourType = [
    {name: "City Tours", icon: BuildingOfficeIcon, qty: "10 Tours+"},
    {name: "Boat Tours", icon: BuildingOfficeIcon, qty: "10 Tours+"},
    {name: "Adventure", icon: BuildingOfficeIcon, qty: "10 Tours+"},
    {name: "Foods", icon: BuildingOfficeIcon, qty: "10 Tours+"},
    {name: "City Tours", icon: BuildingOfficeIcon, qty: "10 Tours+"},
    {name: "City Tours", icon: BuildingOfficeIcon, qty: "10 Tours+"},
  ]


  const topDestination = [
    {
      name: "City Tours", 
      image: "https://c02.purpledshub.com/uploads/sites/41/2021/08/mountains-7ddde89.jpg", qty: "1700 Travellers"
    },
    {
      name: "Boat Tours", 
      image: "https://c02.purpledshub.com/uploads/sites/41/2021/08/mountains-7ddde89.jpg", qty: "1700 Travellers"
    },
    {
      name: "Adventure", 
      image: "https://c02.purpledshub.com/uploads/sites/41/2021/08/mountains-7ddde89.jpg", qty: "1700 Travellers"
    },
    {
      name: "Foods", image
      : "https://c02.purpledshub.com/uploads/sites/41/2021/08/mountains-7ddde89.jpg", qty: "1700 Travellers"
    },
    {
      name: "City Tours", 
      image: "https://c02.purpledshub.com/uploads/sites/41/2021/08/mountains-7ddde89.jpg", qty: "1700 Travellers"
    },
    {
      name: "City Tours", 
      image: "https://c02.purpledshub.com/uploads/sites/41/2021/08/mountains-7ddde89.jpg", qty: "1700 Travellers"
    },
  ]

  const featuredTour = [
    {title: "wonders of the west", country: "City Tours", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC6Br4x4iQdSsuUsR5IuDsAJAFmXNbKTb0Pw&usqp=CAU", rating:"4.5" , review:"15", days:"7days", price: "450"},
    {title: "wonders of the west", country: "City Tours", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC6Br4x4iQdSsuUsR5IuDsAJAFmXNbKTb0Pw&usqp=CAU", rating:"4.5" , review:"15", days:"7days", price: "450"},
    {title: "wonders of the west", country: "City Tours", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC6Br4x4iQdSsuUsR5IuDsAJAFmXNbKTb0Pw&usqp=CAU", rating:"4.5" , review:"15", days:"7days", price: "450"},
    {title: "wonders of the west", country: "City Tours", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC6Br4x4iQdSsuUsR5IuDsAJAFmXNbKTb0Pw&usqp=CAU", rating:"4.5" , review:"15", days:"7days", price: "450"},
    {title: "wonders of the west", country: "City Tours", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC6Br4x4iQdSsuUsR5IuDsAJAFmXNbKTb0Pw&usqp=CAU", rating:"4.5" , review:"15", days:"7days", price: "450"},
  ]


  const formContainer = () => {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 border shadow-lg p-5 -mt-48 bg-white rounded-lg'>
        <div>
          <p className='italic font-semibold'>Destination</p>
          <InputBox changeInput={(value) => console.log(value)} label="destination" placeholder="Where to go?" Icon={PaperAirplaneIcon}   />
        </div>
        
        <div>
          <p className='italic font-semibold'>Type</p>
          <InputBox changeInput={(value) => console.log(value)} label="Type" placeholder="Activity" Icon={FlagIcon}   />
        </div>

        <div>
          <p className='italic font-semibold'>When</p>
          <InputBox changeInput={(value) => console.log(value)} label="When" placeholder="Date" Icon={CalendarIcon}   />
        </div>
        
        <div>
          <p className='italic font-semibold'>Guests</p>
          <InputBox changeInput={(value) => console.log(value)} label="Guests" placeholder="0" Icon={UsersIcon}   />
        </div>
        
        <div className='flex items-end sm:col-span-2 lg:col-span-1'>
          <ButtonPrimary handleClick={() => console.log('asdfsdf')} title="Search" />
        </div>
      </div>
    )
  }

  const renderChooseTourType = (tour) => {
    return (
      <Heading1 heading="Pick A Tour Type" title="Browse By Category" >
      <div className='flex items-center justify-between gap-10 flex-wrap'>
        {
          tour.map((Tour, index) => (
            <div key={index} className='flex flex-col items-center justify-center gap-2'>
              <div className='bg-yellow-400 rounded-full flex justify-center p-5'>
                <Tour.icon className='h-7 w-7' />
              </div>
              <div className='text-base'>
                <p className='font-bold'>{Tour.name}</p>
                <p className='text-sm text-center'>{Tour.qty}</p>
              </div>
            </div>
            
          ))
        }
      </div>

      
    </Heading1>
    )
  }


  const renderWhyChooseUs = () => {
    return (
      <LargeContainer>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-16 h-96'>
            <div className='bg-blue-900'>image part</div>
            <div className='flex flex-col justify-center items-start'>
              <p className='font-bold italic text-blue-900'>Why Choose Us</p>
              <p className='text-4xl font-bold pb-5'>Plan Your Trip <br /> with Trisog</p>
              <p className='text-sm text-slate-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, voluptatibus.</p>
              <ul className='text-slate-800 grid grid-cols-2 gap-x-8 gap-y-2 py-5'>
                <li><p className='text-sm font-bold'><span className='pr-3 font-extrabold'>✓</span>Travel Plan</p></li>
                <li><p className='text-sm font-bold'><span className='pr-3 font-extrabold'>✓</span>Cheap Rates</p></li>
                <li><p className='text-sm font-bold'><span className='pr-3 font-extrabold'>✓</span>Travel Plan</p></li>
                <li><p className='text-sm font-bold'><span className='pr-3 font-extrabold'>✓</span>Travel Plan</p></li>
              </ul>

              <button className='border rounded-lg p-3 px-7 font-semibold transition-all duration-150 hover:bg-blue-900 hover:text-white'>Contact Us</button>
            </div>


            </section>
        </LargeContainer>
    )
  }
  

  const renderTopDestination = (destination) => {
    return(
      <LargeContainer>
        <div>
          <p className='font-bold italic text-blue-900'>Destination</p>
          <div className='flex justify-between'>
          <p className='text-4xl font-bold pb-5'>Top Destinations</p>
          <button className='flex items-center gap-1 font-bold'>See All  <ChevronRightIcon className='h-5 w-5' /> </button>
          </div>
        </div>
        <CardCarousel>
        {
          destination.map((place, index) => (
            <DestinationCard place={place} serial={index} key={index} />
          ))
        }
        </CardCarousel>
      </LargeContainer>
    )
  }


  const renderFeaturedTours  =  () => {
    return(
      <Heading1 heading="Featured Tours" title="Tours" shouldWhite={true}>
        <CardCarousel>
          {
            featuredTour.map((place, index) => (
              <TourCard placeInfo={place} key={index} serial={index} />
            ))
          }
        </CardCarousel>
      </Heading1>
    )
  }
  return (
    <div>
        
      {/* hero section  */}
      <HeroSection />

      {/* form section  */}
      <LargeContainer>
        {formContainer()}
      </LargeContainer>

      {/* type section        */}
      <div className='mt-28'>
        {renderChooseTourType(tourType)}
      </div>

      {/* why choose us  */}
      <div className='mt-16'>
        {renderWhyChooseUs()}
        
      </div>

      {/* top destinaiton  */}
      <div className='mt-16'>
        {renderTopDestination(topDestination)}
      </div>


      {/* featured tour  */}
      <div className='mt-16 bg-blue-900'>
        {renderFeaturedTours()}
      </div>
    </div>
  )
}
