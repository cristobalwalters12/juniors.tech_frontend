import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetails from './pages/PostDetails'
import { LandingPage } from './pages/LandingPage'
import RoleManagement from './pages/RoleManagement'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/login'
import AdminPanel from './pages/AdminPanel'
import ReportsManagement from './pages/ReportsManagement'
import CategoryManagement from './pages/CategoryManagement'
import PostsReport from './pages/PostsReportManagement'
import CommentsReport from './pages/CommentsReportsManagement'
import UsersReport from './pages/UsersReportsManagement'

function App () {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/posts/new" element={<CreatePost />} />
      <Route path="/posts/:id/edit" element={<EditPost />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/home" element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
      <Route path="/admin-panel/role-management" element={<RoleManagement />} />
      <Route path="/admin-panel/reports-management" element={<ReportsManagement />} />
      <Route path="/admin-panel/reports-management/posts-reports" element={<PostsReport />} />
      <Route path="/admin-panel/reports-management/comments-reports" element={<CommentsReport />} />
      <Route path="/admin-panel/reports-management/users-reports" element={<UsersReport />} />
      <Route path="/admin-panel/category-management" element={<CategoryManagement />} />
      <Route path="/register"element= {<Register/>}/>
      <Route path="/login"element= {<Login/>}/>
    </Routes>
  )
}

export default App
