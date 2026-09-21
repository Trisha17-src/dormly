import { Routes, Route } from 'react-router'
import AppShell from './layouts/AppShell'
import PlaceholderPage from './pages/PlaceholderPage'
import DashboardPage from './pages/DashboardPage'
import ComplaintsPage from './pages/ComplaintsPage'

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/room" element={<PlaceholderPage title="Room" />} />
        <Route path="/meals" element={<PlaceholderPage title="Meals" />} />
        <Route path="/complaints" element={<ComplaintsPage />} />
        <Route path="/leave" element={<PlaceholderPage title="Leave" />} />
        <Route path="/announcements" element={<PlaceholderPage title="Announcements" />} />
        <Route path="*" element={<PlaceholderPage title="Page not found" />} />
      </Routes>
    </AppShell>
  )
}

export default App