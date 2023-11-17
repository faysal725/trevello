import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LargeContainer from '../Wrapper/Container/LargeContainer'
import { BeakerIcon, BuildingOfficeIcon, ChevronRightIcon } from '@heroicons/react/24/solid'



const tourType = [
  {name: "City Tours", icon: BuildingOfficeIcon, qty: "10 Tours+"},
  {name: "Boat Tours", icon: BuildingOfficeIcon, qty: "10 Tours+"},
  {name: "Adventure", icon: BuildingOfficeIcon, qty: "10 Tours+"},
  {name: "Foods", icon: BuildingOfficeIcon, qty: "10 Tours+"},
]

export default function TrustedPartner() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900">

      <div className="relative isolate overflow-hidden pt-14">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="">
          <LargeContainer>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-16 h-fit'>
                <div className='flex flex-col justify-center items-start'>
                  <p className='font-bold italic text-yellow-300'>Are you ready to travel?</p>
                  <p className='text-4xl font-bold pb-5 text-white'>Trevello is a world Leading <br /> Online Tour Booking Platform</p>

                  <button className='border rounded-lg p-3 px-7 font-semibold text-white transition-all duration-150 hover:bg-white hover:text-black'>Contact Us</button>

                </div>

                <div className='grid grid-cols-2 gap-14 flex-wrap'>
                    {
                      tourType.map((Tour, index) => (
                        <div key={index} className='flex flex-col items-center justify-center py-6  bg-white'>
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

                

            </section>
          </LargeContainer>
          <div className=' bg-blue-900/60 mt-10 p-10'>
            <LargeContainer>
              
              <div className='flex justify-center flex-col items-center gap-5'>
                  <p className='font-bold italic text-yellow-300'>Are you ready to travel?</p>
                  <div className='grid grid-cols-5 gap-28'>
                    <img src="https://ouch-cdn2.icons8.com/XZoe8h9h5dUcbMKv0uxmCndrldSPZw-YTknyRMwPPic/rs:fit:1015:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjUy/LzJmZTZhNzkxLWFj/YjMtNGNmNC04Yjdm/LTQ5MjE0MjNlN2Jh/Zi5zdmc.png" alt="" />
                    <img src="https://ouch-cdn2.icons8.com/XZoe8h9h5dUcbMKv0uxmCndrldSPZw-YTknyRMwPPic/rs:fit:1015:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjUy/LzJmZTZhNzkxLWFj/YjMtNGNmNC04Yjdm/LTQ5MjE0MjNlN2Jh/Zi5zdmc.png" alt="" />
                    <img src="https://ouch-cdn2.icons8.com/XZoe8h9h5dUcbMKv0uxmCndrldSPZw-YTknyRMwPPic/rs:fit:1015:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjUy/LzJmZTZhNzkxLWFj/YjMtNGNmNC04Yjdm/LTQ5MjE0MjNlN2Jh/Zi5zdmc.png" alt="" />
                    <img src="https://ouch-cdn2.icons8.com/XZoe8h9h5dUcbMKv0uxmCndrldSPZw-YTknyRMwPPic/rs:fit:1015:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjUy/LzJmZTZhNzkxLWFj/YjMtNGNmNC04Yjdm/LTQ5MjE0MjNlN2Jh/Zi5zdmc.png" alt="" />
                    <img src="https://ouch-cdn2.icons8.com/XZoe8h9h5dUcbMKv0uxmCndrldSPZw-YTknyRMwPPic/rs:fit:1015:456/extend:false/wm:1:re:0:0:0.8/wmid:ouch/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjUy/LzJmZTZhNzkxLWFj/YjMtNGNmNC04Yjdm/LTQ5MjE0MjNlN2Jh/Zi5zdmc.png" alt="" />
                  </div>
              </div>
            </LargeContainer>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
