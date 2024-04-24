import { Route, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetails from './pages/PostDetails'
import { LandingPage } from './pages/LandingPage'
import NotFound from './pages/NotFound'
import Register from './pages/Register'
import Login from './pages/Login'
import { ROLES } from './config/constants/roles'
import SearchPosts from './pages/SearchPosts'
import StackedLayout from './layouts/StackedLayout'
import Modal from './shared/components/Modal'
import PublicProfileComponent from './features/publicProfile/publicProfileComponent'
import EditUserProfile from './features/editUserProfile/editUser/EditUserProfile'
import ChangePassword from './features/changePassword/ChangePassword'
import DesactivateAccount from './features/desactivateAccount/DesactivateAccount'
import { RoleManagementTable } from './features/dashboard/RoleManagementTable'
import ReportManagementSelector from './features/dashboard/ReportManagementSelector'
import { PostReportTable } from './features/dashboard/PostsReportManagementTable'
import { CommentReportTable } from './features/dashboard/CommentReportsManagementTable'
import { UserReportTable } from './features/dashboard/UserReportsManagement'
import { CategoryManagementTable } from './features/dashboard/CategoryManagementTable'
import DashboardLayout from './layouts/DashboardLayout'
import PersistAuth from './shared/components/Auth/PersistAuth'
import RequireAuth from './shared/components/Auth/RequireAuth'
import AuthenticateForm from './shared/components/Auth/AuthenticateForm'
import RequireAccountOwner from './shared/components/Auth/RequireAccountOwner'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import UserSearch from './pages/UserSearch'

function App () {
  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route element={<PersistAuth/>}>
        <Route element={<StackedLayout/>}>
          <Route path="/register"element= {<Register/>}/>
          <Route path="/login"element= {<Login/>}/>
        </Route>
      </Route>

      <Route element={<StackedLayout/>}>
        <Route path="/" element={<LandingPage />} />
        <Route path='*' element={<NotFound />} />
      </Route>

      <Route element={<DashboardLayout/>}>
        <Route path="/home" element={<Home />} />
        <Route path="/search/posts" element={<SearchPosts />} />
        <Route path="/search/users" element={<UserSearch />} />
        <Route path="/users/:username" element={<PublicProfileComponent />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/posts/:id/:slug" element={<PostDetails />} />
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />} >
        <Route element={<DashboardLayout/>}>
          <Route path="/posts/new" element={<CreatePost />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
        </Route>
      </Route>

      <Route element={<RequireAccountOwner />} >
        <Route element={<DashboardLayout/>}>
          <Route path="/users/:username/edit" element={<EditUserProfile />} />
          <Route path="/users/:username/change-password" element={<ChangePassword />} />
          <Route path="/users/:username/deactivate-account" element={<DesactivateAccount />} />
        </Route>
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.MOD]} />} >
        <Route path='/admin' element={<DashboardLayout/>}>
          <Route path="/admin/roles" element={<RoleManagementTable />} />
          <Route path="/admin/reports" element={<ReportManagementSelector />} />
          <Route path="/admin/reports/posts" element={<PostReportTable />} />
          <Route path="/admin/reports/comments" element={<CommentReportTable />} />
          <Route path="/admin/reports/users" element={<UserReportTable />} />
        </Route>
      </Route>

      <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />} >
        <Route element={<DashboardLayout/>}>
          <Route path="/admin/categories" element={<CategoryManagementTable />} />
        </Route>
      </Route>
    </Routes>

    <Modal name="login">
      <AuthenticateForm/>
    </Modal>
  </>
  )
}

export default App
