import Sidebar from '../shared/components/Sidebar'
import VerifyUser from '../pages/VerifyUser'

const HolyGrailLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
  <header className=" p-4"><VerifyUser /></header>
  <div className="flex flex-1 flex-row">
    <aside className="w-1/3 p-4 max-w-[18rem]">
      <Sidebar
      />
    </aside>
    {children}
  </div>
</div>

  )
}

export default HolyGrailLayout
