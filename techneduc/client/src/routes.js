import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import AdminPage from './pages/admin_page';
import SchoolPage from './pages/school_page';
import StudentPage from './pages/student_page';


function AppRoutes() {
    return <BrowserRouter>
        <Routes>
            <Route path="admin" element={<AdminPage />} />
            <Route path="school" element={<SchoolPage />} />
            <Route path="student" element={<StudentPage />} />
            <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
    </BrowserRouter>
}

export default AppRoutes;