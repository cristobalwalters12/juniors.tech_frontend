import { Route, Routes } from 'react-router-dom'
import PostDetails from './pages/PostDetails'
import { LandingPage } from './pages/LandingPage'

function App () {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/post" element={<PostDetails />} />
    </Routes>
  )
}

export default App
