import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'
import RoleManagement from './pages/RoleManagement'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<PostDetails />} />
      <Route path="/admin-panel/role-management" element={<RoleManagement />} />
    </Routes>
  )
}

export default App
