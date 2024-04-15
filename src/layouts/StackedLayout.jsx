import { Outlet } from 'react-router-dom'
import { Footer } from '../shared/components/Footer'
import CustomNavbar from '../shared/components/Navbar/CustomNavbar'

const StackedLayout = () => {
  return (
    <div className='flex flex-col min-h-lvh relative'>
      <div className='flex-1 min-h-lvh'>
      <header className='sticky top-0 z-20 py-1.5 px-4 min-h-[3.5rem] flex items-center shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 rounded-none border-b-[1.5px] !border-blue-gray-50 bg-blue-gray-50 !pl-2 !pr-3 lg:!px-4 lg:!py-0.5'>
        <div className='mx-auto max-w-[80rem] w-full'>
          <CustomNavbar/>
        </div>
      </header>
      <main className='overflow-x-hidden'>{<Outlet/>}</main>
      </div>
      <Footer/>
    </div>
  )
}

export default StackedLayout
