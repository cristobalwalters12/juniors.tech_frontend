import VerifyUser from '../pages/VerifyUser'
import SideBar from '../shared/components/Sidebar'

const HolyGrailLayout = ({ children }) => {
  return (

<div className="flex min-h-screen flex-col">
  <header className=" p-4"><VerifyUser /></header>
  <div className="flex flex-1 flex-row">
    <aside className="w-1/3 p-4 max-w-[18rem]"><SideBar /></aside>
    <main className=" w-1/3 flex-1 p-4">{ children }</main>
  </div>
</div>

  )
}

export { HolyGrailLayout }
