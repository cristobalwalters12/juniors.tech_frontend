import { useState, useEffect } from 'react'
import { baseApi } from '../api/baseApi'
import Navbar from '../shared/components/Navbar'
import NavbarUser from '../shared/components/NavbarUser'

function VerifyUser () {
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await baseApi.get('/users')
        setUserData(response.data)
      } catch (error) {
        setError(error.message)
      }
    }

    fetchUserData()
  }, [])

  if (error) {
    return <p>Error: {error}</p>
  }

  if (!userData) {
    return <Navbar />
  }

  return (
    <NavbarUser />
  )
}

export default VerifyUser
