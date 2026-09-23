import { Routes, Route } from 'react-router'
import AppShell from './layouts/AppShell'
import ProtectedRoute from './Components/ProtectedRoute'
import PlaceholderPage from './pages/PlaceholderPage'
import DashboardPage from './pages/DashboardPage'
import ComplaintsPage from './pages/ComplaintsPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import UnauthorizedPage from './pages/UnauthorizedPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      {/* Student routes */}
      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRole="student">
            <AppShell />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="room" element={<PlaceholderPage title="Room" />} />
        <Route path="meals" element={<PlaceholderPage title="Meals" />} />
        <Route path="complaints" element={<ComplaintsPage />} />
        <Route path="leave" element={<PlaceholderPage title="Leave" />} />
        <Route path="announcements" element={<PlaceholderPage title="Announcements" />} />
      </Route>

      {/* Warden routes */}
      <Route
        path="/warden"
        element={
          <ProtectedRoute allowedRole="warden">
            <AppShell />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<PlaceholderPage title="Warden Dashboard" />} />
        <Route path="students" element={<PlaceholderPage title="Students" />} />
        <Route path="rooms" element={<PlaceholderPage title="Rooms" />} />
        <Route path="complaints" element={<PlaceholderPage title="Complaints" />} />
      </Route>

      <Route path="*" element={<PlaceholderPage title="Page not found" />} />
    </Routes>
  )
}

export default App


