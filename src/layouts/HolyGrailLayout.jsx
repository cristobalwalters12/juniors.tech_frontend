import Sidebar from '../shared/components/Sidebar'
import VerifyUser from '../pages/VerifyUser'

const HolyGrailLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className=" p-4"><VerifyUser /></header>
      <div className="flex">
        <aside className="p-4 max-w-[18rem]">
          <Sidebar
          />
        </aside>
        <main className='flex-1'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default HolyGrailLayout
