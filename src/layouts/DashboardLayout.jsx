import { Outlet } from 'react-router-dom'
import Sidebar from '../shared/components/Sidebars/Sidebar'
import CustomNavbar from '../shared/components/Navbar/CustomNavbar'

const DashboardLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className='flex py-2 px-4 min-h-[3.5rem] items-center shadow-md border border-white/80 border-b-[1.5px] !border-blue-gray-50 bg-blue-gray-50 !pl-2 !pr-3 lg:!px-4 lg:!py-0.5'>
        <CustomNavbar/>
      </header>
      <div className="flex-1 flex overflow-y-auto">
        <aside className="p-4 bg-accent-dark w-full max-w-[18rem] hidden sm:block">
          <Sidebar/>
        </aside>
        <main className="flex-1 p-4 pb-0 bg-grey-light overflow-y-auto">
          <div className="h-full overflow-y-auto">
            <Outlet/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
