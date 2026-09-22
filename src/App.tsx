import { Routes, Route } from 'react-router'
import AppShell from './layouts/AppShell'
import PlaceholderPage from './pages/PlaceholderPage'
import DashboardPage from './pages/DashboardPage'
import ComplaintsPage from './pages/ComplaintsPage'
import LoginPage from './pages/LoginPage'
import { supabase } from './lib/supabaseClient'


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route element={<AppShell />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/room" element={<PlaceholderPage title="Room" />} />
        <Route path="/meals" element={<PlaceholderPage title="Meals" />} />
        <Route path="/complaints" element={<ComplaintsPage />} />
        <Route path="/leave" element={<PlaceholderPage title="Leave" />} />
        <Route path="/announcements" element={<PlaceholderPage title="Announcements" />} />
        <Route path="*" element={<PlaceholderPage title="Page not found" />} />
      </Route>
    </Routes>
  )
}

export default App