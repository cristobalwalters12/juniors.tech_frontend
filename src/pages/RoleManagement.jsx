import { NavbarSearch } from '../shared/components/NavbarWithSearch'
import { ListDefault } from '../shared/components/SidebarAdmin'
import { RoleManagementTable } from '../shared/components/RoleManagementTable'
import { Footer } from '../shared/components/Footer'

function RoleManagement () {
  return (
    <div className="flex min-h-screen flex-col">
      <header><NavbarSearch /></header>
      <div className="flex flex-1 flex-row justify-center">
        <aside className="w-1/4"><ListDefault/></aside>
        <main className="flex-1 w-1/2 mt-20"><RoleManagementTable /></main>
      </div>
      <footer><Footer /></footer>
    </div>
  )
}

export default RoleManagement
