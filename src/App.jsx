import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetails from './pages/PostDetails'
import { LandingPage } from './pages/LandingPage'
import RoleManagement from './pages/RoleManagement'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import RegisterEmail from './pages/RegisterEmail'
import Login from './pages/login'
import PublicProfile from './pages/PublicProfile'

function App () {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/posts/new" element={<CreatePost />} />
      <Route path="/posts/:id/edit" element={<EditPost />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/home" element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path="/admin-panel/role-management" element={<RoleManagement />} />
      <Route path="/Register"element= {<Register/>}/>
      <Route path="/RegisterEmail"element= {<RegisterEmail/>}/>
      <Route path="/Login"element= {<Login/>}/>
      <Route path="/PublicProfile"element= {<PublicProfile/>}/>
    </Routes>
  )
}

export default App
