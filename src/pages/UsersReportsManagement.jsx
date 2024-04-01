import { NavbarSearch } from '../shared/components/NavbarWithSearch'
import { Footer } from '../shared/components/Footer'
import { ListDefault } from '../features/dashboard/SidebarAdmin'
import { UserReportTable } from '../features/dashboard/UserReportsManagement'

function UsersReport () {
  return (
    <div className="flex min-h-screen flex-col">
      <header><NavbarSearch /></header>
      <div className="flex flex-1 flex-row justify-center">
        <aside className="w-1/4"><ListDefault/></aside>
        <main className="flex-1 w-1/2 mt-20"><UserReportTable /></main>
      </div>
      <footer><Footer /></footer>
    </div>
  )
}

export default UsersReport
