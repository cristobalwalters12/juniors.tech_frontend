import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'
import RoleManagement from './pages/RoleManagement'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import RegisterEmail from './pages/RegisterEmail'
import Login from './pages/login'
import PublicProfile from './pages/PublicProfile'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/create-post" element={<PostDetails />} />
      <Route path='*' element={<NotFound />} />
      <Route path="/post" element={<PostDetails />} />
      <Route path="/admin-panel/role-management" element={<RoleManagement />} />
      <Route path="/Register"element= {<Register/>}/>
      <Route path="/RegisterEmail"element= {<RegisterEmail/>}/>
      <Route path="/Login"element= {<Login/>}/>
      <Route path="/PublicProfile"element= {<PublicProfile/>}/>

    </Routes>
  )
}

export default App
