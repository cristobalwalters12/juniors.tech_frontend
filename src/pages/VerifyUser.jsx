import { NavbarLanding as Navbar } from '../shared/components/NavbarLanding'
import NavbarUser from '../shared/components/NavbarUser'
import { useAuthStore } from '../stores/authStore'

function VerifyUser () {
  const user = useAuthStore((state) => state.user)
  const role = useAuthStore((state) => state.role)

  console.log(role)

  if (!user) {
    return <Navbar />
  }

  return (
    <NavbarUser profile={user} role={role} />
  )
}

export default VerifyUser
