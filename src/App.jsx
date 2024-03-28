import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'
import NotFound from './pages/NotFound'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<PostDetails />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
