import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'
import AdminPanel from './pages/AdminPanel'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<PostDetails />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
    </Routes>
  )
}

export default App
