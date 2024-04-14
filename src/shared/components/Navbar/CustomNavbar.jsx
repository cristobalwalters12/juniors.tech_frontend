import { NavLink, useNavigate } from 'react-router-dom'
import { Typography } from '@material-tailwind/react'
import { PlusIcon } from '@heroicons/react/24/outline'
import { useAuthStore } from '../../../stores/authStore'
import SearchBar from './SearchBar'
import NavItem from './NavItem'
import ProfileMenu from './ProfileMenu'
import Logo from '../Logo'
import NavTextButton from './NavTextButton'
import RequireAuthOnClick from '../Auth/RequireAuthOnClick'
import NavbarMenu from './NavbarMenu'

const fullNavbarShowsIn = ['/admin', '/search', '/posts', '/profile', '/home']

const CustomNavbar = () => {
  const loggedIn = useAuthStore(state => state.isAuth)
  const navigate = useNavigate()
  const handleCreatePost = () => navigate('/posts/new')

  return (
    <div className="flex justify-between items-center gap-2 w-full">
      <div className="flex gap-2">
        <NavItem showIn={fullNavbarShowsIn} className="sm:hidden">
          <NavbarMenu />
        </NavItem>
        <NavLink to="/home" className="flex items-center">
          <Logo className="text-xl" accent2="text-primary-dark" />
        </NavLink>
      </div>
      <div className="flex flex-1 justify-end gap-2">
        <div className="flex-1 self-center">
          <NavItem showIn={fullNavbarShowsIn}>
            <SearchBar className="mx-auto max-w-[30rem]"/>
          </NavItem>
        </div>
          <div className="flex items-center gap-2">
            <NavItem showIn={fullNavbarShowsIn}>
              <RequireAuthOnClick onClickAuthenticated={handleCreatePost}>
                <NavTextButton className="flex gap-1 !rounded-full md:!rounded-lg items-center" primaryIn={loggedIn ? '*' : ''}>
                  <div className="w-5 h-7 p-0 flex items-center justify-center">
                    <PlusIcon className='w-5 h-5' strokeWidth={3} />
                  </div>
                  <Typography variant='h6' className='hidden sm:block normal-case font-normal'>Crear publicación</Typography>
                </NavTextButton>
              </RequireAuthOnClick>
            </NavItem>
          {loggedIn
            ? <>
                <NavItem showIn='/'>
                  <NavTextButton to="/home" primaryIn="/">
                    <Typography variant='h6' className='normal-case font-medium'>Ir al foro</Typography>
                  </NavTextButton>
                </NavItem>
                <NavItem hideIn='/' className="flex">
                  <ProfileMenu />
                </NavItem>
              </>
            : <div className="flex gap-2">
                <NavItem className="hidden sm:block" hideIn="/register">
                  <NavTextButton to="/register">
                    <Typography variant='h6' className='normal-case font-medium'>Crear cuenta</Typography>
                  </NavTextButton>
                </NavItem>
                <NavItem hideIn="/login">
                  <NavTextButton to="/login" primaryIn="*">
                    <Typography variant='h6' className='normal-case font-medium'>Iniciar sesión</Typography>
                  </NavTextButton>
                </NavItem>
              </div>
          }
          </div>
        </div>
      </div>
  )
}

export default CustomNavbar
