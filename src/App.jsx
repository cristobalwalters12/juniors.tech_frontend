import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetails from './pages/PostDetails'
import Register from './pages/Register'
import RegisterEmail from './pages/RegisterEmail'
import Login from './pages/login'
import PublicProfile from './pages/PublicProfile'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/new" element={<CreatePost />} />
      <Route path="/posts/:id/edit" element={<EditPost />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/Register"element= {<Register/>}/>
      <Route path="/RegisterEmail"element= {<RegisterEmail/>}/>
      <Route path="/Login"element= {<Login/>}/>
      <Route path="/PublicProfile"element= {<PublicProfile/>}/>
    </Routes>
  )
}

export default App
