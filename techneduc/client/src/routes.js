import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import AdminPage from './pages/admin_page';
import ClassPage from './pages/class_page';
import SchoolPage from './pages/school_page';
import StudentPage from './pages/student_page';
import LoginPage from './pages/login_page';
import LecturePage from './pages/lecture_page';


function AppRoutes() {
    return <BrowserRouter>
        <Routes>
            <Route path="admin" element={<AdminPage />} />
            <Route path="school" element={<SchoolPage />} />
            <Route path="student" element={<StudentPage />} />
            <Route path="lecture" element={<LecturePage />} />
            <Route path="class" element={<ClassPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/lecture" />} />
        </Routes>
    </BrowserRouter>
}

export default AppRoutes;