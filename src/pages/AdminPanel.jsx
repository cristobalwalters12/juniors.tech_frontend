import { Footer } from '../shared/components/Footer'
import { SidebarAdmin } from '../shared/components/Sidebars/SidebarAdmin'

function AdminPanel () {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1 flex-row justify-center">
        <aside className="w-1/4"><SidebarAdmin /></aside>
        <main className="flex-1 w-1/2 mt-20">
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default AdminPanel
