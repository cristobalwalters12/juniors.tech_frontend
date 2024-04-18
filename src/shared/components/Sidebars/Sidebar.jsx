import { useLocation } from 'react-router-dom'
import { SidebarAdmin } from './SidebarAdmin'
import SidebarSearch from './SidebarSearch'
import { SidebarAccount } from './SidebarAccount'
import { useAuthStore } from '../../../stores/authStore'
import SidebarHome from './SidebarHome'

export default function Sidebar () {
  const { pathname } = useLocation()
  const username = useAuthStore(state => state.user)

  if (pathname.startsWith('/search')) {
    return <SidebarSearch />
  } else if (username && pathname.startsWith(`/users/${encodeURI(username)}`)) {
    return (<SidebarAccount />)
  } else if (pathname.startsWith('/users')) {
    return (<SidebarHome />)
  } else if (pathname.startsWith('/admin')) {
    return (<SidebarAdmin />)
  } else {
    return <SidebarHome />
  }
}
