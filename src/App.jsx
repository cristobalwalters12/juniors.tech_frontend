import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<PostDetails />} />
    </Routes>
  )
}

export default App
