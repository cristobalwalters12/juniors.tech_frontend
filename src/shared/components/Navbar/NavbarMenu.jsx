import { useEffect, useState } from 'react'
import { Drawer } from '@material-tailwind/react'
import { createPortal } from 'react-dom'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Sidebar from '../Sidebars/Sidebar'
import RoundedIconButton from '../Buttons/RoundedIconButton'

const NavbarMenu = () => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(prevState => !prevState)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 768 && setOpen(false)
    )
  }, [])

  return (
    <>
      <RoundedIconButton icon={Bars3Icon} onClick={toggleMenu} variant="text" />
      {createPortal(
        <Drawer open={open} onClose={toggleMenu} className="p-4 min-h-lvh bg-accent-dark">
          <Sidebar />
        </Drawer>
        , document.getElementById('modal')
      )}
    </>
  )
}

export default NavbarMenu
