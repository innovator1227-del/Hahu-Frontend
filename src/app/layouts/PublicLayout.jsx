import { useState } from 'react'
import Footer from '@/components/common/Footer'
import Navbar from '@/components/common/header/Navbar'
import Sidebar from '@/components/common/sidebar/Sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@/store/authStore.jsx'

const PublicLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const { user } = useAuth()
  const location = useLocation()
  const showHero = location.pathname === '/' || location.pathname === '/browse'

  return (
    <div className={`min-h-screen text-black`}>
      <Sidebar
        isOpen={showSidebar}
        variant={user ? 'user' : 'public'}
        onClose={() => setShowSidebar(false)}
      />
      <div className={`min-h-screen transition-all duration-500 ${showSidebar ? 'md:pl-64' : 'md:pl-[88px]'}`}>
        <Navbar toggleSidebar={() => setShowSidebar((prev) => !prev)} />

        {showHero && (
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to HAHU MARKET</h1>
            <p className="max-w-2xl text-gray-600">Browse trusted second-hand items, post listings, and manage orders with a responsive market experience.</p>
          </div>
        )}

        <main className="bg-slate-50 min-h-screen rounded-tl-3xl">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default PublicLayout
