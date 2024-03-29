import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { baseApi } from '../api/baseApi'
// import axios from 'axios'
import { NavbarLanding as Navbar } from '../shared/components/NavbarLanding'
import NavbarUser from '../shared/components/NavbarUser'

function VerifyUser () {
  const [userData, setUserData] = useState(null)
  // const [error, setError] = useState(null)

  // const { id } = useParams()
  // `/api/v1/users${id}`
  useEffect(() => {
    fetch('/api/v1/users').then(response => response.json()).then(data => setUserData(data))
  }, [])

  // if (error) {
  //   return <p>Error: {error}</p>
  // }

  if (!userData) {
    return <Navbar />
  }

  return (
    <NavbarUser />
  )
}

export default VerifyUser
