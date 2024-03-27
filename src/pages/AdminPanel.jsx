import { NavbarSearch } from '../shared/components/NavbarWithSearch'
import { ListDefault } from '../shared/components/SidebarAdmin'

function AdminPanel () {
  return (
    <div>
      <NavbarSearch />
      <ListDefault/>
    </div>
  )
}

export default AdminPanel
