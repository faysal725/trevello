import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { XCircleIcon } from '@heroicons/react/24/solid'
import Logo from '../../shared/Logo'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, count: '5', current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, count: '12', current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, count: '20+', current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

export default function Sidebar({shouldOpen, currentState}) {
  return (
    
    <div className='fixed w-full h-full bg-slate-600/50 top-0 left-0' >
        <div className='bg-red-500 w-fit min-w-[300px] h-full p-5 flex flex-col gap-3 relative'>

            
            <button onClick={() => shouldOpen(false)} className='absolute top-5 -right-14 transition-all duration-150 hover:text-red-500 hover:scale-110 cursor-pointer text-white'>
              <XCircleIcon  className='h-10 w-10 '  />
            </button>
            
            <div className=''>
                <Logo />
            </div>
        
            <ul role="list" className=" pt-8 text-white">
                {navigation.map((item, index) => (
                <li key={index} className="py-1 hover:bg-red-950/60 px-2 rounded-lg transition-all duration-150 cursor-pointer">
                    {item.name}
                </li>
                ))}
            </ul>

        
        </div>
    </div> 
  )
}
