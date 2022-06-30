import AdminPage from './pages/admin_page';
import Form from './pages/form';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import './style/index.scss';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="admin" element={<AdminPage />} />
      <Route path="school" element={<Form type='school' />} />
      <Route path="student" element={<Form type='student' />} />
      <Route path="*" element={<Navigate to="/admin" />} />
    </Routes>
  </BrowserRouter >
}

export default App;
