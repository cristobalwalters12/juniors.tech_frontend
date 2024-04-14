import { SidebarAdmin } from './SidebarAdmin'
import SidebarSearch from './SidebarSearch'
import { useLocation } from 'react-router-dom'
import { matchesAnyPath } from '../../utils/matchesAnyPath'

export default function Sidebar () {
  const { pathname } = useLocation()
  if (matchesAnyPath(pathname, ['/home'])) {
    return <SidebarSearch />
  } else if (matchesAnyPath(pathname, ['/admin'])) {
    return (<SidebarAdmin />)
  } else {
    return <SidebarSearch />
  }
}
