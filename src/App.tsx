import { Route, Routes } from 'react-router-dom'
import AppShell from './layouts/AppShell'
import PlaceholderPage from './pages/PlaceholderPage'

function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<PlaceholderPage title="Dashboard" />} />
        <Route path="/room" element={<PlaceholderPage title="Room" />} />
        <Route path="/meals" element={<PlaceholderPage title="Meals" />} />
        <Route path="/complaints" element={<PlaceholderPage title="Complaints" />} />
        <Route path="/leave" element={<PlaceholderPage title="Leave" />} />
        <Route path="/announcements" element={<PlaceholderPage title="Announcements" />} />
        <Route path="*" element={<PlaceholderPage title="Page not found" />} />
      </Routes>
    </AppShell>
  )
}

export default App