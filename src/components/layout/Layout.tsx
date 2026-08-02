import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileDock } from './MobileDock'

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen paper-grain">
      <Header />
      <main className="pb-20 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileDock />
    </div>
  )
}
