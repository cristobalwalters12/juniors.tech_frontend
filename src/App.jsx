import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetails from './pages/PostDetails'

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/new" element={<CreatePost />} />
      <Route path="/posts/:id/edit" element={<EditPost />} />
      <Route path="/posts/:id" element={<PostDetails />} />
    </Routes>
  )
}

export default App
